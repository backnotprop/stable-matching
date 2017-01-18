'use strict';
import Immutable, {List, fromJS} from 'immutable';

/**
 * REDUX SETUP
 */
export const BEGIN_NEW_STAGE = 'BEGIN_NEW_STAGE';
export const SENDER_SENDS_PROPOSAL = 'SENDER_SENDS_PROPOSAL';
export const RECEIVER_ACCEPT_PROPOSAL = 'RECEIVER_ACCEPT_PROPOSAL';
export const RECEIVER_REJECT_PROPOSAL = 'RECEIVER_REJECT_PROPOSAL';
export const ELIMINATE_SENDER_PREFERENCE = 'ELIMINATE_SENDER_PREFERENCE';
export const CREATE_FINAL_MATCHING = 'CREATE_FINAL_MATCHING';

const GLOBALS = {
  dispatchBeginNewStage: function(demoType, stage) {
    return {
      type: BEGIN_NEW_STAGE,
      demoType: demoType,
      stage: stage
    };
  },
  dispatchSenderSendProposal: function(demoType, sender, receiver) {
    return {
      type: SENDER_SENDS_PROPOSAL,
      demoType: demoType,
      sender: sender,
      receiver: receiver
    };
  },
  dispatchReceiverAcceptProposal: function(demoType, sender, receiver) {
    return {
      type: RECEIVER_ACCEPT_PROPOSAL,
      demoType: demoType,
      sender: sender,
      receiver: receiver
    };
  },
  dispatchReceiverRejectProposal: function(demoType, sender, receiver) {
    return {
      type: RECEIVER_REJECT_PROPOSAL,
      demoType: demoType,
      sender: sender,
      receiver: receiver
    };
  },
  dispatchEliminateSenderPref: function(demoType, sender, receiver) {
    return {
      type: ELIMINATE_SENDER_PREFERENCE,
      demoType: demoType,
      sender: sender,
      receiver: receiver
    };
  },
  dispatchCreateFinalMatching: function(demoType, sender, receiver) {
    return {
      type: CREATE_FINAL_MATCHING,
      demoType: demoType,
      sender: sender,
      receiver: receiver
    };
  }
}

/********/

/**
 * Stable Matched configured for redux
 */
class StableMatchRedux {
  constructor(intial = null, preParsed = null, dispatch = null, demoType = 'full') {
    this.intialData = fromJS(intial);
    this.parsedData = preParsed;
    

    this.__demoType__  = demoType;
    this.timleyTracker = 0;
    // setups up human-viewable action
    this.__dispatch__  = (action) => {
      setTimeout(() => { 
        dispatch(action)
      }, 1000 * this.timleyTracker++);
    }

  }

  get data() {
    return this.parsedData;
  }

  constructState() {
    this.parsedData = this.intialData.map((entity,i) => {
      return entity.withMutations(e => {
        e
          .set('hasAcceptedSentProposal',false)
          .set('acceptedSentRank', null)
          .set('acceptedSentID', null)
          .set('hasAcceptedReceivedProposal',false)
          .set('acceptedReceivedRank', null)
          .set('acceptedReceivedID', null);
      });
    });
  }

  /**
   * Proposal Stage 1
   * - everyone sends out a proposal and they are either accepted or rejected
   * - recursive until everone has accepted proposal
   */
  proposalStage() {
    let self = this;
    let allProposed = false;

    self.__dispatch__(GLOBALS.dispatchBeginNewStage(self.__demoType__, 'proposal'))

    while(!allProposed) {
      let key = self.parsedData.findKey(e=> {return e.get('hasAcceptedSentProposal') === false;});
      let newSender = self.parsedData.get(key)

      if(newSender) {
        // stability check before hand
        // let stability = self.stablilityCheck();
        // if(!stability.stable) {
        //   throw new self.StabilityException(stability);
        // }

        // need to go through proposal stages for this person and their preferences
        // next offer is first choice in preference list that hasn't been proposed to yet
        // send offer to that person, propose Offer will accept or reject the offer
        let receiver = 
          self.parsedData.get(
            newSender
              .get('prefs')
              .get('0')
              .get('id')
            );

        self.__dispatch__(GLOBALS.dispatchSenderSendProposal(self.__demoType__,newSender,receiver));

        // init proposal process for sender and receiver
        self._proposalProcess( 
          newSender, // the sender
          receiver, // the receiver
          newSender.getIn(['prefs','0','strength']) // sender's weight on receiver
        );
      } else {
        allProposed = true;
      }
    }
  }

  /**
   * Proposal Process (used throughout)
   * iterates over the process of sending, accepting, and rejecting proposals
   */
  _proposalProcess(sender, receiver, receiverRank) {
    let self = this;

    // we need to see how the receiver ranks the sender of the proposal 
    let senderRank = 
      receiver
        .get('prefs')
        .find(p=>{return p.get('id') === sender.get('id');})
        .get('strength');
    
    // check if receiver has already accepted a proposal
    if(receiver.get('hasAcceptedReceivedProposal')) {
      // need to compare against accept proposal
      if(receiver.get('acceptedReceivedRank') > senderRank) {
        // sender is rejected! because offer has already been accept by someone with higher preference
        self._rejectOffer(sender, receiver);
      } else {
        // sender is accepted!
        // now the receiver needs to notify the previous acceptee that they are now regjects
        let rejected = self.parsedData.get(receiver.get('acceptedReceivedID'));
        self._rejectOffer(rejected, receiver);
        self._acceptOffer(sender, receiver, receiverRank, senderRank);   
      } 
    } else {
      // accepted because receiver does not have any accepted proposal yet
      self._acceptOffer(sender, receiver, receiverRank, senderRank);
    }
  }

  /**
   * Creates an acceptance agreement between a sender and reciever
   * will produce a new state
   */
  _acceptOffer(sender,receiver, receiverRank, senderRank) {

    this.__dispatch__(GLOBALS.dispatchReceiverAcceptProposal(this.__demoType__,sender,receiver));

    this.parsedData = this.parsedData.withMutations(data => {
      data
        .set(sender.get('id'), 
          sender.withMutations(s => {
            s
              .set('hasAcceptedSentProposal',true)
              .set('acceptedSentRank',receiverRank)
              .set('acceptedSentID',receiver.get('id'))
          }))
      
        .set(receiver.get('id'), 
          receiver.withMutations(r => {
            r
              .set('hasAcceptedReceivedProposal',true)
              .set('acceptedReceivedRank',senderRank)
              .set('acceptedReceivedID',sender.get('id'))
          }))
    });
  }

  /**
   * Creates an rejection between a sender and reciever (symmetrically)
   * will produce a new state
   */
  _rejectOffer(sender,receiver) {

    this.__dispatch__(GLOBALS.dispatchReceiverRejectProposal(this.__demoType__,sender,receiver));

    let updateSender = 
      sender.withMutations(s => {
        s
          .set('hasAcceptedSentProposal', false)
          .set('acceptedSentRank', null)
          .set('acceptedSentID', null)
      })

    this.parsedData = this.parsedData.set(sender.get('id'), updateSender)

    this._eliminateSymmetrically(updateSender, receiver);
  }
  
  /**
   * Elimination Stage 2
   * - removes all preferences in a list who can not be possibly matched
   */
  eliminateStage() {
    let self = this;
    
    self.__dispatch__(GLOBALS.dispatchBeginNewStage(self.__demoType__, 'elimination'))
    
    this.parsedData.map((entity,i) => {
      let keepLast = entity.get('prefs').findKey(p => { return p.get('id') === entity.get('acceptedReceivedID')});
      let s = entity.get('prefs').size - 1;
      while(s != keepLast) {
        // stability check before hand
        // let stability = stablilityCheck();
        // if(!stability.stable) {
        //   // console.log(stability)
        //   throw new StabilityException(stability);
        // }
        self._eliminateSymmetrically(entity, self.parsedData.get(entity.getIn(['prefs',s.toString()]).get('id')))
        s--;
      }

    });
  }

  /**
   * Cyclic Elimination Stage 3
   * - description needed
   */
  cycleReduceStage() {
    let self = this;

    self.__dispatch__(GLOBALS.dispatchBeginNewStage(self.__demoType__, 'cycle-reduce'))

    let allMatched = false;
    // all or nothing phase 
    while(!allMatched) {
      // there is an entityUnreduced if any one person has more than 1 preference remaining
      let entityUnreduced = self.parsedData.find(entity=>{return entity.get('prefs').size !== 1})
      console.log(self.parsedData.toJS())
      if(entityUnreduced) {
        let p = entityUnreduced // starting person
        let q = self.parsedData.get(entityUnreduced.get('prefs').get(1).get('id')) // their second preference
       
        let currentPair = List([p,q]);
        let cyclePairs = List([currentPair]); // first pair in cycle
  	    // cyclic reduction
        let cycle = false;
        while(!cycle) {
          // need to check stability at this point
          // let stability = stablilityCheck();
          // if(!stability.stable) {
          //   throw new StabilityException(stability);
          // }
	        // redefine p and q during the iterative process
          p = self.parsedData.get(q.get('prefs').last().get('id')); // grab the last preference of previous q
          q = self.parsedData.get(p.get('prefs').get(1).get('id')) // q now equals new p's second preference
          
          // if(_.isUndefined(p.choices[1]) || p.choices.length == 0){
          //   q = _DB[ p.choices[0].id ];
          // } else {
          //   q = _DB[ p.choices[1].id ]; 
          // } 

          // let stability2 = stablilityCheck();
          // if(!stability2.stable) {
          //   throw new StabilityException(stability2);
          // }

          let newPair = List([p,q]);

	        // look for a cycle in cyclePairs before pushing into it, check the new p to see if its reoccured
          
          let spotCycle = cyclePairs.find(pair => {return pair.get(0).get('id') === p.get('id')})
          cyclePairs = cyclePairs.push(newPair);

	        // there was a cycle found, go through with the diagnal elimination phase
          if (spotCycle) {
            cycle = true;
  	        // cycle pairs should start where the cycle was found
            // cyclePairs.splice(0,spotCycle);
            self._eliminateDiagnals(cyclePairs);

            // let stability3 = stablilityCheck();
            // if(!stability3.stable) {
            //   throw new StabilityException(stability3);
            // }
          }
        };	
      }	else {
        //   let stabilityFinal = stablilityCheck();
        //   if(!stabilityFinal.stable) {
        //     throw new StabilityException(stabilityFinal);
        //   }
        allMatched = true;
      }	
    }
  }

  // deletes prefences that resulted in the diagnal pattern found above
  _eliminateDiagnals(pairs) {
    let self = this;
    // start at second element for diagnal rejection
    pairs.map((p,i) => {
      if(i < pairs.size - 1) {
        self._eliminateSymmetrically(p.get(1),pairs.get(i+1).get(0))
      }
    })
  }

  presentFinalMatches(){
    this.parsedData.map(entity => {
      this.__dispatch__(GLOBALS.dispatchCreateFinalMatching(this.__demoType__,entity,this.parsedData.get(entity.get('prefs').get(0).get('id'))));
    })
    this.__dispatch__(GLOBALS.dispatchBeginNewStage(this.__demoType__, 'complete'))
  }

  /**
   * Eliminates two people from each others preference list
   * Shared throughout
   * 
   */
  _eliminateSymmetrically(sender,receiver) {
    this.__dispatch__(GLOBALS.dispatchEliminateSenderPref(this.__demoType__,sender,receiver));
    this.parsedData = this.parsedData.withMutations(data => {
      data
        .set(sender.get('id'), 
          data.get(sender.get('id'))
            .deleteIn(['prefs', sender.get('prefs').findKey(p=>{return p.get('id') == receiver.get('id')})]))
        .set(receiver.get('id'), 
          data.get(receiver.get('id'))
            .deleteIn(['prefs', receiver.get('prefs').findKey(p=>{return p.get('id') == sender.get('id')})]))
    });
  }

}



export default StableMatchRedux;