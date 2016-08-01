"use strict";

let _ = require('lodash');
let dummyDb = require('./dummy_db');
var fs = require("fs");

function parseDb(db) {
	let output = {};
	let i = 0;

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
		for (var j = 1; j < db.length + 1; j++) {
			if(j != db[i].id) {
				let randomPref;
				// used to keep track of unique preferences (nodups)
				let newPref = false
				while(!newPref) {
					randomPref = Math.floor(Math.random()* db.length);
					if(usedPrefs.indexOf(randomPref) == -1) {
						usedPrefs.push(randomPref)
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


		output[db[i].id].choices = _.sortBy(output[db[i].id].choices, o => { return o.strength; });

		i++;
	};	

	return output; 
}


var StableMatching = (function (data) {
	let _DB = data;
	let _REMOVED = {};
	
	function _proposalStage(start){
		let i = typeof start !== 'undefined' ?  start : 1;
		let allProposed = false;
		let stable = false;

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

	}

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
				// accepted because the sender outranks the previously accepted proposal
				// the previous proposal now needs to be denied
				acceptOffer(sender, receiver, receiverRank, senderRank);
				rejectOffer(_DB[receiver.acceptedReceivedID], receiver);
			} 
		} else {
			// accepted because he does not have any accepted proposal
			acceptOffer(sender, receiver, receiverRank, senderRank);
		}
	}

	function acceptOffer(sender,receiver, receiverRank, senderRank) {
		sender.hasAcceptedSentProposal = true;
		sender.acceptedSentRank = receiverRank;
		sender.acceptedSentID = receiver.id;
		receiver.hasAcceptedReceivedProposal = true;
		receiver.acceptedReceivedRank = senderRank;
		receiver.acceptedReceivedID = sender.id;
	}

	function rejectOffer(sender,receiver) {
		sender.hasAcceptedSentProposal = false;
		sender.acceptedSentRank = -1;
		sender.acceptedSentID = -1;
		
		eliminateChoices(receiver,sender);

		_proposalStage(sender.id)
	}
	

	function _eliminateStage() {
		_.forIn(_DB, (person,id) => {
			let sentTo = _DB[person.acceptedSentID];
		  let keepLast = _.findIndex(sentTo.choices, function(p) { return p.id == person.id; });
			for(let i = keepLast + 1; i < sentTo.choices; i++) {
				// each the rejected and rejecter can remove each other from choices list
				eliminateChoices(sentTo, _DB[sentTo.choices[i].id]);
			}
		});
	}

	function eliminateChoices(rejecter, rejected) {
		let remove1 =  _.findIndex(rejected.choices, function(p) { return p.id == rejecter.id; });
		rejected.choices.splice(remove1, 1);
		let remove2 =  _.findIndex(rejecter.choices, function(p) { return p.id == rejected.id; });
		rejecter.choices.splice(remove2, 1);
	}

	function _cycleReduceStage() {
		let stable = false;
		
		// all or nothing phase 
		while(!stable) {
			let start = indexWithMultipleRemain();

			let p = _DB[start].choices[1] != undefined ?_DB[_DB[start].choices[1].id] : _DB[_DB[start].choices[_DB[_DB[start].choices.length - 1 ].id]]; // second remaining preference of starting person i
			let q = _DB[p.choices[p.choices.length - 1 ].id]; // last remaining preference of p
			
			let currentPair = [p,q];
			let cyclePairs = [currentPair]; // first pair in cycle
			// cyclic reduction
			let cycle = false;
			let cycleCancled = false
			while(!cycle && !cycleCancled) {

				// make sure there is at least one element in the choices remaining
				if(q.choices.length === 0) {
					// this element needs to be removed and all preferences indicating it
					eliminateFromPool(q.id);
					cycleCancled = true;
				} else {
					p = q.choices[1] != undefined ? _DB[q.choices[1].id] : _DB[q.choices[q.choices.length - 1 ].id]; 
					q = _DB[p.choices[p.choices.length - 1 ].id];

					let newPair = [p,q];
					cyclePairs.push(newPair);

					if(newPair[0].id == currentPair[0].id) {
						console.log("CYCLE OCCURED")
						cycle = true;
						// TODO remove diagnals in cyclePairs
						eliminateDiagnals(cyclePairs)
					} else {
						console.log(cyclePairs.length)
					}
				}

			}

			// TODO if everyone has 1 remainging match then stable
			stable = stabilityCheck();
			
		};

	}

	function indexWithMultipleRemain() {
		let start = false;
		_.forIn(_DB, (person,key) => {
			if( person.choices.length > 1 ) {
				start =  key; 
			}
		});
		console.log("START ===> " + start)
		return start;
	}

	function eliminateFromPool(rid) {
		_REMOVED[rid] = _.cloneDeep(_DB[rid]);
		delete _DB[rid];
		_.forIn(_DB, (person,i) => {
			let remove = _.findIndex(person.choices, function(p) { return p.id == rid; });
			person.choices = person.choices.splice(remove, 1);
		})

	}

	function eliminateDiagnals(pairs) {
		for(let i = 0; i<pairs.length; i++) {
				// first index doesnt have a diagnal match
				if(i != 0) {
					// the - 1 creates the diagnal effect
					_DB[pairs[i][0].id].choices = _.remove(_DB[pairs[i][0].id].choices, c => {return c.id == pairs[i - 1][1].id;});
					_DB[pairs[i - 1][1].id].choices = _.remove(_DB[pairs[i][0].id].choices, c => {return c.id == pairs[i][0].id;});
				}
		}
	}

	function stabilityCheck() {
		let stable = true;
		_.forIn(_DB, (person, key) => {
			if(person.choices.length > 1) {
				stable = false;
			}
		})
		return stable;
	}

	
	return {	
		init: function(db) {
			_DB = db;
		},
		doStageOne: function() {
			_proposalStage(1);
			console.log("stage one done");
		},
		testStageOne: function() {
			_.forIn(_DB, (obj,person) => {
					console.log(obj.name + "    =======>     " + _DB[obj.acceptedID].name)	
			})
		},
		doStageTwo: function(){
			_eliminateStage();
			console.log("stage two done");
		},
		doStageThree: function() {
			_cycleReduceStage();
			console.log("stage three done");
		},
		getFinalMatches: function() {
			return _DB;
		}
	};

})();

let personPreferredLists = parseDb(dummyDb);
StableMatching.init(personPreferredLists);
StableMatching.doStageOne();
// StableMatching.testStageOne();
StableMatching.doStageTwo();
// StableMatching.doStageThree();
fs.appendFile('/Users/ramboramos/Documents/__RESULTS__.json', JSON.stringify(StableMatching.getFinalMatches()), (err) => {
	if (err) throw err;
});



