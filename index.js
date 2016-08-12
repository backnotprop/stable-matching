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
  function _proposalStage(start){
    let i = typeof start !== 'undefined' ?  start : 1;

    // functional loop
    while(i < Object.keys(_DB).length + 1) {
      let sender = _DB[i];
      if(sender) {
        if(!sender.hasAcceptedSentProposal) {
          // need to go through proposal stages for this person and their preferences
          // next offer is first choice in preference list that hasn't been proposed to yet
          // send offer to that person, propose Offer will accept or reject the offer
          proposalProcess( sender, _DB[sender.choices[0].id], sender.choices[0].strength );
        }
      }
      i++;
    };

    // iterates over the process of sending, accepting, and rejecting proposals
    function proposalProcess(sender, receiver, receiverRank) {
      // we now need to check to see if the receiver has accepted proposals and 
      // how the receiver ranks the sender of the proposal 
      let indexOfsender = _.findIndex(receiver.choices, p => { return p.id == sender.id; });
      // create shortcut to senders object in receiver's list
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
      eliminateChoices(receiver,sender);
      // the function now reruns until sender can send a successful proposal
      _proposalStage(sender.id);
    }

  }

  /**
   * Elimination Stage 2
   * - removes all preferences in a list who can not be possibly matched
   */
  function _eliminateStage() {
    _.forIn(_DB, (person,id) => {
      let keepLast = _.findIndex(person.choices, function(p) { return p.id == person.acceptedReceivedID; });
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
  function eliminateChoices(rejecter, rejected) {
    let remove1 =  _.findIndex(rejected.choices, function(p) { return p.id == rejecter.id; });
    rejected.choices.splice(remove1, 1);
    let remove2 =  _.findIndex(rejecter.choices, function(p) { return p.id == rejected.id; });
    rejecter.choices.splice(remove2, 1);
  }

  // checks the data state for anyone with no choices remaining
  function stablilityCheck() {
    let rejected = false;

		_.forIn(_DB, (person, key) => {
			if(person.choices.length == 0) {
        rejected = (rejected != false) ? rejected : person.id;
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
      _DB = db;
    },
    doStageOne: function() {
      return _proposalStage(1);
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
      let testDB = StableMatching.getTestSet();
      StableMatching.init(db);
      try {
        StableMatching.doStageOne();
        StableMatching.doStageTwo();
        StableMatching.doStageThree();
      } catch(errorResults) {
        // return the failed
        console.log(errorResults)
        if(!errorResults.rejected){
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
      initialState: initialState,
      currentState: initialState,
      iterationCount: 0, 
      matches: [],
      rejects: []
    };
   
    let stableMatching = false;
    
    while(!stableMatching) {
      
      let iteration = _runIteration(iterationState.currentState);

      if (iteration.failed) {
        // unstable
        // keep track of rejections
        iterationState.rejects.push(iteration.rejects)
        // construct a new state without rejects
        iterationState.currentState = _reduceState(iterationState.currentState, iteration.reject);
        iterationState.iterationCount++;
      } else {
        // stable (everyone matched)
        iterationState.matches.push(iteration.matches)
        if(iterationState.rejects.length > 0) {
          iterationState.currentState = _createState(iterationState.rejects);
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


  function _reduceState(state, rid) {
    // delete user from new state
		delete state[rid];
		_.forIn(state, (person,key) => {
      // reset person keys
      person.hasAcceptedReceivedProposal = false; 
      person.hasAcceptedSentProposal = false;                                                                                           
      delete person.acceptedReceivedRank;                                                                                                    
      delete person.acceptedReceivedID;                                                                                                                                                                                                 
      delete person.acceptedSentRank;                                                                                                         
      delete person.acceptedSentID;
      // deleted reject from this list
			let removeIndex = _.findIndex(person.choices, function(p) { return p.id == rid; });
			person.choices.splice(removeIndex, 1);
		});

    return state;
  }

  function _createState(set) {
    set = _.orderBy(set,['id'],['asc']);
    let newState = {};
    _.each(set, (body,id)=> {
      newState[id] = body;
    });
    return newState;
  }

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
	