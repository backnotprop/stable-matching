import Immutable, {fromJS} from 'immutable';

import StableMatch from '../utils/stableMatch';
import data from '../utils/data';

import { 
  BEGIN_NEW_STAGE,
  SENDER_SENDS_PROPOSAL,
  RECEIVER_ACCEPT_PROPOSAL, RECEIVER_REJECT_PROPOSAL,
  ELIMINATE_SENDER_PREFERENCE
} from '../actions/utils/stableMatchRedux';

let sm = new StableMatch(data);
sm.constructState();

const initialState = fromJS({
  fullDemo: {
    data:sm.data,
    currentStage: null
  },
  oneDemo: sm.data,
  twoDemo: sm.data,
  threeDemo: sm.data
});

function prefsReducer(state,action, symm) {
  switch (action.type) {
  case SENDER_SENDS_PROPOSAL: {
    let prefKey = state.findKey(p=>{return p.get('id')===action.receiver.get('id')});
    return state
            .set(prefKey, 
                state.get(prefKey).withMutations(pref => {
                  pref
                    .set('isReceivingProposal',true)
                }))
  }
  case RECEIVER_ACCEPT_PROPOSAL: {
    let prefKey = state.findKey(p=>{return p.get('id')===action[symm].get('id')});
    if(symm === 'receiver'){
      return state
              .set(prefKey, 
                  state.get(prefKey).withMutations(pref => {
                    pref
                      .set('isReceivingProposal',false)
                      .set('hasAcceptedProposal',true)
                  }))
    } else {
      return state
              .set(prefKey, 
                  state.get(prefKey).withMutations(pref => {
                    pref
                      .set('isAnAcceptedSender',true)
                  }))
    }
    
  }
  case RECEIVER_REJECT_PROPOSAL: {
    let prefKey = state.findKey(p=>{return p.get('id')===action.receiver.get('id')});
    return state
            .set(prefKey, 
                state.get(prefKey).withMutations(pref => {
                  pref
                    .set('isReceivingProposal',false)
                    .set('hasAcceptedProposal',false)
                    .set('hasRejectedProposal',true)
                }))
  }
  case ELIMINATE_SENDER_PREFERENCE: {
    let prefKey = state.findKey(p=>{return p.get('id')===action[symm].get('id')});
    return state
            .set(prefKey, 
                state.get(prefKey).withMutations(p => {
                  p
                   .set('isEliminated',true)
                   .set('isAnAcceptedSender',false)
                }))
  }
  default:
    return state      
  }
}

function dataReducer(state,action) {
  switch (action.type) {
  case SENDER_SENDS_PROPOSAL: {
    let stateSender = state.get(action.sender.get('id'));
    return state
             .set(action.sender.get('id'), 
                stateSender.withMutations(sender => {
                  sender
                    .set('isSendingProposal',true)
                    .set('prefs', prefsReducer(stateSender.get('prefs'), action))
                }))
  }
  case RECEIVER_ACCEPT_PROPOSAL: {
    let stateSender = state.get(action.sender.get('id'));
    let stateReceiver = state.get(action.receiver.get('id'));
    return state.withMutations(s => {
            s 
              .set(action.sender.get('id'), 
                stateSender.withMutations(sender => {
                  sender
                    .set('isSendingProposal',false)
                    .set('hasBeenAccepted',true)
                    .set('prefs', prefsReducer(stateSender.get('prefs'), action, 'receiver'))
                }))
              .set(action.receiver.get('id'), 
                stateReceiver
                  .set('prefs', prefsReducer(stateReceiver.get('prefs'), action, 'sender')))
    })
  }

  case RECEIVER_REJECT_PROPOSAL: {
    let stateSender = state.get(action.sender.get('id'));
    return state
            .set(action.sender.get('id'), 
                stateSender.withMutations(sender => {
                  sender
                    .set('isSendingProposal',false)
                    .set('hasBeenAccepted',false)
                    .set('prefs', prefsReducer(stateSender.get('prefs'), action))
                }))
  }
  case ELIMINATE_SENDER_PREFERENCE: {
    let stateSender = state.get(action.sender.get('id'));
    let stateReceiver = state.get(action.receiver.get('id'));
    return state.withMutations(state => {
            state 
              .set(action.sender.get('id'), 
                stateSender
                  .set('prefs', prefsReducer(stateSender.get('prefs'), action, 'receiver')))
              .set(action.receiver.get('id'), 
                stateReceiver
                  .set('prefs', prefsReducer(stateReceiver.get('prefs'), action, 'sender')))
    })
            
  }
  default:
    return state      
  }
}

export default function reporter(state = initialState, action) {
  switch (action.type) {
  case BEGIN_NEW_STAGE:
    return state
              .set(action.demoType, state.get(action.demoType).set('currentStage', action.stage))
  case SENDER_SENDS_PROPOSAL:
  case RECEIVER_ACCEPT_PROPOSAL:
  case RECEIVER_REJECT_PROPOSAL:
  case ELIMINATE_SENDER_PREFERENCE:
    return state
             .set(action.demoType, 
              state.get(action.demoType)
                .set('data', dataReducer(state.get(action.demoType).get('data'),action)))
  default:
    return state;
  }
}
