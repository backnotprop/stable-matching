import Immutable, {fromJS} from 'immutable';

import StableMatch from '../utils/stableMatch';
import data from '../utils/data';

import { 
  BEGIN_NEW_STAGE,
  SENDER_SENDS_PROPOSAL
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

function dataReducer(state,action) {
  switch (action.type) {
  case BEGIN_NEW_STAGE:
  case SENDER_SENDS_PROPOSAL:
    return state
             .set(action.sender.get('id'), action.sender.set('isSendingProposal',true))
  default:
    return state;
  }

}

export default function reporter(state = initialState, action) {
  switch (action.type) {
  case BEGIN_NEW_STAGE:
    return state
              .set(action.demoType, state.get(action.demoType).set('currentStage', action.stage))
  case SENDER_SENDS_PROPOSAL:
  console.log(action.demoType)
  console.log(state.get(action.demoType))
    return state
             .set(action.demoType, 
              state.get(action.demoType)
                .set('data', dataReducer(state.get(action.demoType).get('data'),action)))
  default:
    return state;
  }
}
