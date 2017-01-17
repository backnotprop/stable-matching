import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as  AppActions from './actions/app';

import MatchTable from './components/MatchTable/';

import StableMatch from './utils/stableMatch';

class App extends Component {
  render() {

    let {
      fullDemoData
    } = this.props;

    let sm = new StableMatch(null,fullDemoData);
    sm.proposalStage();
    sm.eliminateStage();
    console.log(sm.data)

    return (
      <div className="App App-gradient">
        <header className="pure-g App-header">
          <div className="pure-u-1-3"></div>
          <div className="pure-u-1-3 App-title"><h1>Stable Matching</h1><p><em>the stable roomate problem</em></p></div>
          <div className="pure-u-1-3"></div>
        </header>

        <section className="App-section App-section-fulldemo">
          <h2>Full Demo</h2>
      
           <MatchTable demoType="full" {...this.props} />
         
        </section>

      </div>
    );
  }
}

function mapStateToProps(state) {
  let { 
    matchTable
  } = state;
  
  const 
    fullDemoData = matchTable.get('fullDemo');

  return {
    fullDemoData
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AppActions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(App);