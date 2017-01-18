import React, { Component } from 'react';

import MatchTable from '../MatchTable/';


class FullDemo extends Component {

  render() {
    let {
      fullDemo
    } = this.props;

    let currentStage = fullDemo.get('currentStage');


    return (
      <div className="Full-Demo">
        
        <MatchTable demoType="fullDemo" {...this.props} />
        <h4>{`${currentStage} stage`}</h4>
      </div>
    );
  }
}

FullDemo.propTypes = {

};

export default FullDemo;
