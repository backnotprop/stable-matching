import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as  AppActions from './actions/app';

import FullDemo from './components/Demos/Full';


class App extends Component {
  render() {

    return (
      <div className="App App-gradient">
        <a className="github-fork-ribbon" href="https://github.com/mdramos/stable-matching" title="Fork me on GitHub">Fork me on GitHub</a>
        <header className="App-header">
          <div className="App-title"><h1>Stable Matching</h1><p><em>the stable roomate problem</em></p></div>
        </header>

        <section className="App-section App-section-fulldemo">
          <h2>Full Demo:</h2>

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