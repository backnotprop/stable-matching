
import StableMatchRedux from './utils/stableMatchRedux';



/**
 * Runs entire demonstration
 */
export function runFullDemo(data) {
  return dispatch => {
    console.log(data)
    let smx = new StableMatchRedux(null,data,dispatch,'fullDemo');
    smx.proposalStage();
    smx.eliminateStage();

    // let sm = new StableMatch(null,fullDemoData);
    // 
    

  }
}