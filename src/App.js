import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as  AppActions from './actions/app';

import FullDemo from './components/Demos/Full';


class App extends Component {
  render() {

    return (
      <div className="App App-gradient">
        <header className="pure-g App-header">
          <div className="pure-u-1-3"></div>
          <div className="pure-u-1-3 App-title"><h1>Stable Matching</h1><p><em>the stable roomate problem</em></p></div>
          <div className="pure-u-1-3"></div>
        </header>

        <section className="App-section App-section-fulldemo">
          <h2>Full Demo</h2>

            <FullDemo {...this.props} />
         
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
    fullDemo = matchTable.get('fullDemo');

  return {
    fullDemo
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AppActions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(App);