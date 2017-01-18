import Immutable, {fromJS} from 'immutable';

import StableMatch from '../utils/stableMatch';
import data from '../utils/data';

import { 
  BEGIN_NEW_STAGE,
  SENDER_SENDS_PROPOSAL,
  RECEIVER_ACCEPT_PROPOSAL
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

function prefsReducer(state,action) {
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
    let prefKey = state.findKey(p=>{return p.get('id')===action.receiver.get('id')});
    return state
            .set(prefKey, 
                state.get(prefKey).withMutations(pref => {
                  pref
                    .set('isReceivingProposal',false)
                    .set('hasAcceptedProposal',true)
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
    return state
            .set(action.sender.get('id'), 
                stateSender.withMutations(sender => {
                  sender
                    .set('isSendingProposal',false)
                    .set('hasBeenAccepted',true)
                    .set('prefs', prefsReducer(stateSender.get('prefs'), action))
                }))
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
    return state
             .set(action.demoType, 
              state.get(action.demoType)
                .set('data', dataReducer(state.get(action.demoType).get('data'),action)))
  default:
    return state;
  }
}
