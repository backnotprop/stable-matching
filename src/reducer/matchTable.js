import Immutable, {Map} from 'immutable';

import StableMatch from '../utils/stableMatch';
import data from '../utils/data';

// import { 
//   
// } from '../actions/reporter';

let sm = new StableMatch(data);
sm.constructState();

const initialState = Map({
  fullDemo: sm.data,
  oneDemo: sm.data,
  twoDemo: sm.data,
  threeDemo: sm.data
});

export default function reporter(state = initialState, action) {
  switch (action.type) {
  case "TODO":
    return state;
  default:
    return state;
  }
}
