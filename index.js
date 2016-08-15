"use strict";

// utility library
let _ = require('lodash');
// our testing DB of users 
let dummyDb = require('./dummy_db');


/**
 * StableMatching
 * 
 * - Irvings Algorithim for Stable Roomate Problem 
 */
let StableMatching = (function () {
  let _DB;

  /**
   * Proposal Stage 1
   * - everyone sends out a proposal and they are either accepted or rejected
   * - recursive until everone has accepted proposal
   */
  function _proposalStage(){
    let remain = Object.keys(_DB);
    let i = remain[0];

    if(i && i != undefined) {
      let sender = _DB[i];
      if(sender) {
        if(!sender.hasAcceptedSentProposal) {
          // stability check before hand
          let stability = stablilityCheck();
          if(!stability.stable) {
            throw new StabilityException(stability);
          }
          // need to go through proposal stages for this person and their preferences
          // next offer is first choice in preference list that hasn't been proposed to yet
          // send offer to that person, propose Offer will accept or reject the offer
          proposalProcess( sender, _DB[sender.choices[0].id], sender.choices[0].strength );
        }
      }
    }

    // iterates over the process of sending, accepting, and rejecting proposals
    function proposalProcess(sender, receiver, receiverRank) {
      // we now need to check to see if the receiver has accepted proposals and 
      // how the receiver ranks the sender of the proposal 
      let indexOfsender = _.findIndex(receiver.choices, p => { return p.id == sender.id; });
      // create shortcut to senders object in receiver's list
      if(!receiver.choices[indexOfsender]) {
        console.log("RECIEVER: " + receiver.id)
        console.log("SENDER: " + sender.id)
      }
      let senderRank = receiver.choices[indexOfsender].strength;
      if(receiver.hasAcceptedReceivedProposal) {
	      // need to compare against accept proposal
        if(receiver.acceptedReceivedRank < senderRank) {
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
      // the function now reruns until sender can send a successful proposal
      // let node clear call-stack
      setTimeout(function() {
        _proposalStage();
      },100)
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
            q = _DB[ p.choices[0].id ]
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
    let rjr = sender.choices.splice(remove1, 1);
    let remove2 =  _.findIndex(receiver.choices, function(p) { return p.id == sender.id; });
    let rdd = receiver.choices.splice(remove2, 1);
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
      //let test = StableMatching.getTestSet()
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
        _.each(person.match, match => {
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
 * 
 * 
 */
let StableDriver = (function (StableMatching) {
  
  /**
   * 
   **/
  let _DATASTORE = {
    initialState: {},
    finalMatches: []
  };

  function _drive() {
    let results = _iterationLoop(_DATASTORE.initialState);
    // TODO console.log result stats
    _generateMatchReport(results.matches)
    _DATASTORE.finalMatches = results.matches;
  }

  function _iterationLoop(initialState) {
    
    let iterationState = {
      initialState: _.cloneDeep(initialState),
      currentState: _.cloneDeep(initialState),
      iterationCount: 0, 
      matches: [],
      rejects: []
    };
   
    let stableMatching = false;
    
    while(!stableMatching) {
       if( iterationState.currentState[7] && iterationState.currentState[94] ) {
        if(_.findIndex(iterationState.currentState[7].choices, c => {return c.id == 94}) == -1 && _.findIndex(iterationState.currentState[94].choices, c => {return c.id == 7}) != -1)  {
          console.log("START: ")
          console.log("7 doesnt have 94, but 94 has 7")
          // _.each(iterationState.matches, m => {
          //   console.log(m.id)
          // })
          console.log()
        }
      }
      let iteration = _runIteration(iterationState.currentState);   
      // console.log(iterationState.currentState[7].id,_.findIndex(iterationState.currentState[7].choices, c => {return c.id == 94}));
      // console.log(iterationState.currentState[94].id,_.findIndex(iterationState.currentState[94].choices, c => {return c.id == 7}));
      if (iteration.failed) {
        // unstable
        // keep track of rejections
        iterationState.rejects.push(iteration.reject)
        // construct a new state without rejects
        iterationState.currentState = _reduceState(iterationState.initialState, iterationState.rejects);
        iterationState.iterationCount++;
      } else {
        // stable (everyone matched)
        _.forIn(iteration.matches, entity => {
          iterationState.matches.push(entity);
        });
        // check for remaining unmatched
        if(iterationState.rejects.length > 0) {
          console.log("MATCH ITERATION FOUND, NOT DONE ==============")
          console.log("MATCHES:  " + iterationState.matches.length)
          console.log("REMAIN:  " + iterationState.rejects.length)
          iterationState.currentState = _reduceState(iterationState.initialState, iterationState.matches);
          iterationState.rejects.length = 0;
          iterationState.iterationCount++;
        } else {
          // base case - everyone is matched
          stableMatching = true;
        }
      }
    };

    return iterationState;
  }


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
        let removeIndex = _.findIndex(entity.choices, e => { return e.id == r.id; });
        entity.choices.splice(removeIndex, 1);
      });
    });

    return state;
  }

  // function _createState(oldState, newSet, withhold) {
  //   let state = _.cloneDeep(oldState);
  //   _.forIn(state, (entity, key) => {
  //     if(newSet.indexOf(parseInt(key,10)) == -1 || _.findIndex(withhold, e => { return e.id == parseInt(key,10) }) != -1 ){
  //       // this entity was already matched
  //       delete state[key];
  //     } else {
  //       // entity still needs to be matched and its match list must as well
  //       let i = entity.choices.length
  //       while (i--) {
  //         // check1 is another reject, check2 looks to see if match
  //         let check1 = newSet.indexOf(parseInt(entity.choices[i].id,10)); // if -1 we will remove from choices
  //         let check2 = _.findIndex(withhold, e => { return e.id == i })
  //         if(check1 == -1 || check2 != -1) {
  //           entity.choices.splice(i, 1);
  //         }
  //         if(entity.choices.length == 0) {
  //           console.log("ALERT")
  //         }
  //       }
  //     }
  //   });
  //   console.log("FOREVER " + Object.keys(state).length)
  //   return state;
  // }

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

  function _generateMatchReport(matches) {
    _.each(matches, matchList => {
       _.forIn(matchList, (entity,id) => {
        console.log("===============");
        console.log("User: " + id);
        console.log("Match: " + entity.choices[0].id);
        console.log();
      });
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

StableDriver.setStore(dummyDb);
StableDriver.runDeepStableMatch();

	// not needed for now
	//
	// function removeRejects() {
	// 	_.forIn(_DB, (person, key) => {
	// 		if(person.choices.length < 1) {
	// 			console.log("HEY ==> " + person.id)
	// 			deleteFromPool(person.id)
	// 		}
	// 	});
	// }
	