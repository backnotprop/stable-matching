"use strict";

// utility library
let _ = require('lodash');
let deepFreeze = require('deep-freeze');
// our testing DB of users 
let dummyDb = require('./dummyDB');


/**
 * StableMatching
 * 
 * - Irvings Algorithim for Stable Roomate Problem 
 * - non iterative, will fail on unstability
 * - use custom driver below to find full stable results
 */
let StableMatching = (function () {
  let _DB;

  /**
   * Proposal Stage 1
   * - everyone sends out a proposal and they are either accepted or rejected
   * - recursive until everone has accepted proposal
   */
  function _proposalStage(){
    let allProposed = false;
    while(!allProposed) {
      let i = _.findKey(_DB,entity => {return !entity.hasAcceptedSentProposal});
      if(i != -1 && i != undefined) {
        let sender = _DB[i];
        // stability check before hand
        let stability = stablilityCheck();
        if(!stability.stable) {
          throw new StabilityException(stability);
        }
        // need to go through proposal stages for this person and their preferences
        // next offer is first choice in preference list that hasn't been proposed to yet
        // send offer to that person, propose Offer will accept or reject the offer
        proposalProcess( sender, _DB[sender.choices[0].id], sender.choices[0].strength );
      } else {
        allProposed = true;
      }
    };
    
    // iterates over the process of sending, accepting, and rejecting proposals
    function proposalProcess(sender, receiver, receiverRank) {
      // we now need to check to see if the receiver has accepted proposals and 
      // how the receiver ranks the sender of the proposal 
      let indexOfsender = _.findIndex(receiver.choices, p => { return p.id == sender.id; });
      // create shortcut to senders object in receiver's list
      if(!receiver.choices[indexOfsender]){
        console.log(" --- LIST MISMATCH ERROR ---");
        console.log("TO "+receiver.id);
        console.log("FROM "+sender.id);
        console.log(JSON.stringify(_DB))
      }
      let senderRank = receiver.choices[indexOfsender].strength;
      if(receiver.hasAcceptedReceivedProposal) {
	// need to compare against accept proposal
        if(receiver.acceptedReceivedRank > senderRank) {
	  // rejected because offer has already been accept by someone with higher preference
          rejectOffer(sender, receiver);
        } else {
	  // define rejected before received accepts a new offer
          let rejected = _DB[receiver.acceptedReceivedID].id;
          acceptOffer(sender, receiver, receiverRank, senderRank);
          // accepted because the sender outranks the previously accepted proposal
          // the previous proposal now needs to be denied
          rejectOffer(_DB[rejected], receiver);
        } 
      } else {
	// accepted because he does not have any accepted proposal
        acceptOffer(sender, receiver, receiverRank, senderRank);
      }
    }

    // sender has accepted sent, receiver has accepted received
    function acceptOffer(sender,receiver, receiverRank, senderRank) {
      sender.hasAcceptedSentProposal = true;
      sender.acceptedSentRank = receiverRank;
      sender.acceptedSentID = receiver.id;
      receiver.hasAcceptedReceivedProposal = true;
      receiver.acceptedReceivedRank = senderRank;
      receiver.acceptedReceivedID = sender.id;
    }

    // sender is denied proposal
    function rejectOffer(sender,receiver) {
      sender.hasAcceptedSentProposal = false;
      sender.acceptedSentRank = -1;
      sender.acceptedSentID = -1;
      eliminateChoices(sender, receiver);
    }

  }

  /**
   * Elimination Stage 2
   * - removes all preferences in a list who can not be possibly matched
   */
  function _eliminateStage() {
    _.forIn(_DB, (person,id) => {
      let keepLast = _.findIndex(person.choices, p => { return p.id == person.acceptedReceivedID; });
      for(let i = keepLast + 1; i < person.choices.length; i++) {
	// each the rejected and rejecter can remove each other from choices list
        eliminateChoices(person, _DB[person.choices[i].id]);
      }
    });
  }

  /**
   * Cyclic Elimination Stage 3
   * - description needed
   */
  function _cycleReduceStage() {
    let allMatched = false;
    // all or nothing phase 
    while(!allMatched) {
      // there is a start if any one person has more than 1 preference remaining
      let start = indexWithMultipleRemain();

      if(start) {
        let p = _DB[start] // starting person
        let q = _DB[ p.choices[1].id ]; // their second preference
       
        let currentPair = [p,q];
        let cyclePairs = [currentPair]; // first pair in cycle
  	// cyclic reduction
        let cycle = false;
        while(!cycle) {
          // need to check stability at this point
          let stability = stablilityCheck();
          if(!stability.stable) {
            throw new StabilityException(stability);
          }

	  // redefine p and q during the iterative process
          p = _DB[q.choices[q.choices.length - 1 ].id];
          if(_.isUndefined(p.choices[1]) || p.choices.length == 0){
            q = _DB[ p.choices[0].id ];
          } else {
            q = _DB[ p.choices[1].id ]; 
          } 

          let stability2 = stablilityCheck();
          if(!stability2.stable) {
            throw new StabilityException(stability2);
          }

          let newPair = [p,q];

	  // look for a cycle in cyclePairs before pushing into it, check the new p to see if its reoccured
          let spotCycle = _.findIndex(cyclePairs, (pair) => { return pair[0].id == p.id; });
          cyclePairs.push(newPair);

	  // there was a cycle found, go through with the diagnal elimination phase
          if ( spotCycle != -1 ) {
            cycle = true;
  	    // cycle pairs should start where the cycle was found
            cyclePairs.splice(0,spotCycle);
            eliminateDiagnals(cyclePairs);
          }
        };	
      }	else {
        allMatched = true;
      }	
    };

    // loop condition looking for persons who have multiple remaining preferences
    function indexWithMultipleRemain() {
      let start = false;
      _.forIn(_DB, (person,key) => {
        if( person.choices.length > 1 ) {
          start = (start != false) ? start : key;
        }
      });
      return start;
    }

    // deletes prefences that resulted in the diagnal pattern found above
    function eliminateDiagnals(pairs) {
      // start at second element for diagnal rejection
      for(let i = 1; i < pairs.length; i++) {
	// the [i - 1][1] creates the diagnal effect
        eliminateChoices(_DB[pairs[i][0].id],_DB[pairs[i - 1][1].id]);
      }
    }

  }

  /**
   * shared  methods
   */

  // eliminates two people from each others preference list
  function eliminateChoices(sender, receiver) {
    let remove1 =  _.findIndex(sender.choices, function(p) { return p.id == receiver.id; });
    sender.choices.splice(remove1, 1);
    let remove2 =  _.findIndex(receiver.choices, function(p) { return p.id == sender.id; });
    receiver.choices.splice(remove2, 1);
  }

  // checks the data state for anyone with no choices remaining
  function stablilityCheck() {
    let rejected = false;
    _.forIn(_DB, (person, key) => {
	if(person.choices.length == 0) {
            rejected = (rejected != false) ? rejected : person;
	}
    });

    if(!rejected) {
      return {
        stable: true
      };
    } else {
      return {
        stable: false,
        rejected: rejected,
        message: "There is an entity which has been rejected by all"
      };
    }
  }

  // generates an exception for unstable matching
  function StabilityException(result) {
   this.message = result.message;
   this.name = "StabilityException";
   this.rejected = result.rejected;
  }


  return {	
    init: function(db) {
      // let test = StableMatching.getTestSet()
      _DB = _.cloneDeep(db);
    },
    doStageOne: function() {
      return _proposalStage();
    },
    doStageTwo: function(){
      return _eliminateStage();
    },
    doStageThree: function() {
      return _cycleReduceStage();
    },
    getTestSet: function() {
      return {
        1:{id:1,choices:[{id:3, strength: 10},{id:4,strength: 8},{id:2, strength: 6},{id:6, strength: 4},{id:5, strength: 2}]},
        2:{id:2,choices:[{id:6, strength: 10},{id:5,strength: 8},{id:4, strength: 6},{id:1, strength: 4},{id:3, strength: 2}]},
        3:{id:3,choices:[{id:2, strength: 10},{id:4,strength: 8},{id:5, strength: 6},{id:1, strength: 4},{id:6, strength: 2}]},
        4:{id:4,choices:[{id:5, strength: 10},{id:2,strength: 8},{id:3, strength: 6},{id:6, strength: 4},{id:1, strength: 2}]},
        5:{id:5,choices:[{id:3, strength: 10},{id:1,strength: 8},{id:2, strength: 6},{id:4, strength: 4},{id:6, strength: 2}]},
        6:{id:6,choices:[{id:5, strength: 10},{id:1,strength: 8},{id:3, strength: 6},{id:4, strength: 4},{id:2, strength: 2}]},
      };
    },
    testStageOne: function() {
      // TODO assert for each person that accepted received == that senders accepted sent
    },
    testStageTwo: function() {
      let db = StableMatching.getFinalMatches();
      let check = true;
      _.forIn(db, (person,key) => {
        _.each(person.choices, match => {
          if(db[match.id].matches.indexOf(person.id) == -1) {
            check = false;
          }
        });
      });
      if(!check) {
        console.log("ERROR - THERE IS A MATCH MISSMATCH");
      } else {
        console.log("STAGE 2 TEST SUCCESS");
      }
    },
    testStageThree: function() {
      // TODO assert cycle reduction is working
    },
    runAllTests: function() {
      // let testDB = StableMatching.getTestSet();
      // StableMatching.init(testDB);
      // StableMatching.doStageOne();
      // StableMatching.testStageOne();
      // StableMatching.doStageTwo();
      // StableMatching.testStageTwo();
      // StableMatching.doStageThree();
      // StableMatching.testStageThree();
    },
    initAndRun: function(db) {
      //let testDB = StableMatching.getTestSet();
      StableMatching.init(db);
      try {
        StableMatching.doStageOne();
        StableMatching.doStageTwo();
        StableMatching.doStageThree();
      } catch(errorResults) {
        // return the failed
        if(!errorResults.rejected){
          console.log("UNEXPECTED ERROR: ");
          console.log(errorResults);
          throw errorResults;
        }
        return {
          failed: true,
          error: errorResults,
          reject: errorResults.rejected
        };
      }
      // success
      return {
        failed: false,
        matches: StableMatching.getFinalMatches(),
      };
    },
    getFinalMatches: function() {
      return _DB;
    }
  };
})();


/**
 * Stable Driver
 * - managers the running of the stable match algorithim 
 * 
 */
let StableDriver = (function (StableMatching) {
  
  /**
   * driver-conserned state
   */
  let _DATASTORE = {
    initialState: {},
    finalMatches: []
  };

  /**
   * controls iteration loop and returns final matches
   */
  function _drive() {
    let results = _iterationLoop(_DATASTORE.initialState);
    _DATASTORE.finalMatches = results.matches;
    _generateMatchReport( _DATASTORE.finalMatches);
  }

  /**
   * continuously runs iterations until stable matching
   */
  function _iterationLoop(initialState) {
    
    //  initial state needs to be immutable
    let _INITIALSTATE = _.cloneDeep(initialState);
    deepFreeze(_INITIALSTATE);

    let iterationState = {
      currentState: _.cloneDeep(initialState), // starting state
      iterationCount: 0, // number of iterations ran
      matches: [], // keeps track of all matches
      rejects: [], // keeps track of rejects during an iteration
      excluded: [], // totally rejected (when preferences aren't fullfilled)
    };
   
    let stableMatching = false;
    
    while(!stableMatching) {
      // console.log(`----STARTING NEW ITERATION #${iterationState.iterationCount} ----`);
      // _.each(iterationState.matches, m => {
      //   console.log(`${iterationState.iterationCount} MATCH: `+ m.id)
      // })
      // _.each(iterationState.rejects, r => {
      //   console.log(`${iterationState.iterationCount} REJECT: `+ r.id)
      // })
      // // let preparedState = _prepAndConfirmState(interationState.currentState)
      // console.log(JSON.stringify(iterationState.currentState))
      // console.log(`----**********************----`);
      let iteration = _runIteration(iterationState.currentState);   
      if (iteration.failed) {
        // unstable
        // keep track of rejections
        iterationState.rejects.push(iteration.reject)
        // construct a new state without rejects
        iterationState.currentState = _reduceState(_INITIALSTATE, iterationState.rejects);
        iterationState.matches.length = 0;
        iterationState.iterationCount++;
      } else {
        // stable (everyone matched)
        _.forIn(iteration.matches, entity => {
          iterationState.matches.push(entity);
        });
        // check for remaining unmatched
        if(iterationState.rejects.length > 0) {
          // there needs to be a total rejection check now
          // if rejects do not prefer each other, then they will break the algorithim
          if(possibiltyRemainCheck(iterationState.rejects)){
            // there are matches, but rejects remain and need to be matched as well
            iterationState.currentState = _reduceState(_INITIALSTATE, iterationState.matches);
            iterationState.rejects.length = 0;
            iterationState.iterationCount++;
          }
          else {
            // second optimal base case - there are matches, but some people were unable to be matched
            stableMatching = true;
          }
        } else {
          // base case - everyone is matched
          stableMatching = true;
        }
      }
    };

    return iterationState;
  }

  /**
   * produces a new state for a new iteration
   */
  function _reduceState(oldState, removeList) {
    let state = _.cloneDeep(oldState);

    _.each(removeList, r => {
      // delete user from new state
      delete state[r.id];
      _.forIn(state, (entity,key) => {
        // reset person keys
        entity.hasAcceptedReceivedProposal = false; 
        entity.hasAcceptedSentProposal = false;                                                                                           
        delete entity.acceptedReceivedRank;                                                                                                    
        delete entity.acceptedReceivedID;                                                                                                                                                                                                 
        delete entity.acceptedSentRank;                                                                                                         
        delete entity.acceptedSentID;
        // deleted reject from this list
        let removeIndex = _.findIndex(entity.choices, c => { return c.id == r.id; });
        // some lists may not include that choice any longer
        if(removeIndex != -1) {
          entity.choices.splice(removeIndex, 1);
        }
      });
    });

    return state;
  }

  /*
   * runs a new iteration
   */
  function _runIteration(db) {
    // run iteration can return at any moment with a failed attempt,
    // if so it will include the rejected users to be removed
    let iteration = StableMatching.initAndRun(db);
    if(iteration.failed) {
      return {
        failed: true,
        reject: iteration.reject,
        error: iteration.error
      }
    } else {
      return {
        failed: false,
        matches: iteration.matches
      }
    };
  }

  /**
   * generates report after successful stable matching
   */
  function _generateMatchReport(matches) {
    _.each(matches, match => {
      console.log("===================")
      console.log(match.id)
      console.log(match.choices[0])
    });
  }

  /**
   * make's sure is preped properly before running through an iteration
   */
  function _prepAndConfirmState(state) {
    // those going in need to remain in everyone else's preference lists
    let totalRejects =  _totalRejectLookup(state);
    if(totalRejects.length === 0){
      return state;
    } else {
      // run reduce state without them
      // return reduce state function
    }

    
  }

  /**
   * looks for total rejects (those who no longer remain in anyones prefernence list)
   */ 
  function _totalRejectLookup(state) {
    let totalRejects = [];
    _.forIn(state, (entity,key) => {
      // check that choices remain
      if(entity.choices.length === 0) {
        // all choices have been removed and matched elsewhere 
        totalRejects.push(entity);
      } else {
        // iterate over entities choices
        _.forEach(entity.choices, c => {
          // check tht
        });
      }
    });
  }

  return {
    setStore: function(data) {
      _DATASTORE.initialState = data;
    },
    runDeepStableMatch: function() {
     _drive();
    },
    getMatches: function(){
      return _DATASTORE.finalMatches;
    }
  };
})(StableMatching);

let testSet = {
  "300": {"id":300,"choices":[{"id":302,"strength":4},{"id":303,"strength":3},{"id":318,"strength":2},{"id":304,"strength":1}]},
  "301":{"id":301,"choices":[{"id":302,"strength":4},{"id":303,"strength":3},{"id":304,"strength":2},{"id":318,"strength":1}]},
  "302":{"id":302,"choices":[{"id":301,"strength":4},{"id":303,"strength":3},{"id":300,"strength":2},{"id":304,"strength":1}]},
  "303":{"id":303,"choices":[{"id":301,"strength":4},{"id":300,"strength":3},{"id":318,"strength":2},{"id":302,"strength":1}]},
  "304":{"id":304,"choices":[{"id":300,"strength":3},{"id":301,"strength":2},{"id":302,"strength":1}]},
  "318":{"id":318,"choices":[{"id":300,"strength":3},{"id":301,"strength":2},{"id":303,"strength":1}]}
};
StableDriver.setStore(testSet);
// StableDriver.setStore(dummyDb);
StableDriver.runDeepStableMatch();

