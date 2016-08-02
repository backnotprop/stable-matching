"use strict";

// utility library
let _ = require('lodash');
// our testing DB of users 
let dummyDb = require('./dummy_db');


/**
 * - Parse Db
 * - NOT part of main algorithm
 * - takes a collection of people and randomly generates preferences for them
 * - used for testing
 */
function parseDb(db) {
  let output = {};
  let i = 0;
  // until everyone has generated preferences
  while(i < db.length) {
    // init person preference object
    output[db[i].id] = {
      name: db[i].first_name + " " +  db[i].last_name,
      id: db[i].id,
      choices: []
    };	
    // generate a rank for every other person (j reps ids, so start at 1)
    // keep track of unique/used weights
    let usedPrefs = [];
    for (let j = 1; j < db.length + 1; j++) {
      if(j != db[i].id) {
        let randomPref;
        // used to keep track of unique preferences (nodups)
        let newPref = false;
        while(!newPref) {
          randomPref = Math.floor(Math.random()* db.length);
          if(usedPrefs.indexOf(randomPref) == -1) {
            usedPrefs.push(randomPref);
            newPref = true;
          } 
        }
        // create new match and preference weight
        output[db[i].id].choices.push({
          id: j,
          strength: randomPref
        });
      }
    };
    output[db[i].id].choices = _.orderBy(output[db[i].id].choices,['strength'],['desc']);

    i++;
  };	
  return output; 
}


/**
 * StableMatching
 * 
 * - Irvings Algorithim for Stable Roomate Problem 
 */
let StableMatching = (function (data) {
  let _DB = data;

  // let _REMOVED = {}; // solution to make everyone matched

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
      if(!sender.hasAcceptedSentProposal) {
	// need to go through proposal stages for this person and their preferences
	// next offer is first choice in preference list that hasn't been proposed to yet
	// send offer to that person, propose Offer will accept or reject the offer
        proposalProcess( sender, _DB[sender.choices[0].id], sender.choices[0].strength );
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
    let stable = false;
    // all or nothing phase 
    while(!stable) {
      // there is a start if any one person has more than 1 preference remaining
      let start = indexWithMultipleRemain();

      if(start) {
        let p = _DB[ _DB[start].id ]; // starting person
        let q = _DB[ _DB[start].choices[1].id ]; // their second preference

        let currentPair = [p,q];
        let cyclePairs = [currentPair]; // first pair in cycle
  	// cyclic reduction
        let cycle = false;

        while(!cycle) {
	  // redefine p and q during the iterative process
          p = _DB[q.choices[q.choices.length - 1 ].id];
          q = _DB[p.choices[1]] ? _DB[p.choices[1].id]  : _DB[p.choices[p.choices.length - 1 ].id] ;
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
        stable = true;
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
	// function deleteFromPool(rid) {
	// 	_REMOVED[rid] = _.cloneDeep(_DB[rid]);
	// 	delete _DB[rid];
	// 	_.forIn(_DB, (person,key) => {
	// 		let remove = _.findIndex(person.choices, function(p) { return p.id == rid; });
	// 		person.choices.splice(remove, 1);
	// 	});
	// }

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


  /**
   * availible public methods
   * 
   */
  return {	
    init: function(db) {
      _DB = db;
    },
    doStageOne: function() {
      _proposalStage(1);
      console.log("stage one done");
    },
    doStageTwo: function(){
      _eliminateStage();
      console.log("stage two done");
    },
    doStageThree: function() {
      _cycleReduceStage();
      console.log("stage three done");
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
      // TODO assert off of test set
    },
    testStageThree: function() {
      // TODO assert cycle reduction is working
    },
    runAllTests: function() {
      let testDB = TestMatching.getTestSet();
      TestMatching.init(testDB);
      TestMatching.doStageOne();
      TestMatching.testStageOne();
      TestMatching.doStageTwo();
      TestMatching.testStageTwo();
      TestMatching.doStageThree();
      TestMatching.testStageThree();
    },
    generateReport: function() {
      let final = StableMatching.getFinalMatches();
      let matches = 0;
      let rejects = 0;
      _.forIn(final, (p,k) =>{
        if(p.choices.length == 1) {
          matches ++;
        } else if(p.choices.length == 0) {
          rejects ++;
        } else {
          console.log("ERROR: THIS SHOULDNT CALL ----");
        }
      });
      console.log( "MATCHES: " + matches );
      console.log( "REJECTS: " + rejects);
    },
    getFinalMatches: function() {
      return _DB;
    }
  };

})();


let personPreferredLists = parseDb(dummyDb);
StableMatching.init(personPreferredLists);
StableMatching.doStageOne();
StableMatching.doStageTwo();
StableMatching.doStageThree();
StableMatching.generateReport();
