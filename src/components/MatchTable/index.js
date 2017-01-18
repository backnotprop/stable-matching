import React, { Component, PropTypes } from 'react';

const Icon = ({name}) => (<i className={`fa icon-action ${name} fa-lg`} aria-hidden="true"></i>)

const TableHeader = ({data}) => (
  <thead>
    <tr>
    {data.map((entity,i) => 
      <th key={i}>{i == 1 ? 'Person' : `Preference #${i-1}`}</th>
    )}
    </tr>
  </thead>
);

const TableCellEntity = ({entity}) => (
  <td>
    <p>
      {entity.get('name')}
    </p>
      {entity.get('isSendingProposal') 
        ?
          <span className="icon-contain">
            <Icon name="fa-envelope-o icon-send-action"/>{' '}
            <Icon name="fa-angle-double-right icon-send-action icon-left-right"/>
          </span>
        : entity.get('hasBeenAccepted')
          ?
            <span className="icon-contain">
              <Icon name="fa-envelope-o icon-success-action"/>{' '}
              <Icon name="fa-angle-double-right icon-no-action"/>
            </span>
          :
            <span className="icon-contain">
              <Icon name="fa-envelope-o icon-no-action"/>{' '}
              <Icon name="fa-angle-double-right icon-no-action"/>
            </span>
      }
  </td>
);
// 

// const IconBoxMatchInfo = (rejected, matched) => {
//   let box;
//   if(rejected) {
//     box = (
      
//     );
//   } else if (matched) {
//     box = ()
//   } else {
//     box = ()
//   }

//   return (box)
// }

const TableCellPref = ({data, pref}) => (
  <td>
    <p>
      {data.get(pref.get('id')).get('name')}
    </p>

      <span className="icon-contain">
        <br/>
        <Icon name={`fa-flag-checkered  ${pref.get('hasMatched') ? "icon-success-action" : "icon-no-action"}`}/>
      </span>

       <span className="icon-contain">
        <br/>
        <Icon name={`fa-window-close-o  ${pref.get('isEliminated') ? "icon-failure-action" : "icon-no-action"}`}/>
      </span>

      {pref.get('isReceivingProposal') 
        ?
          <span className="icon-contain">
            <Icon name="fa-angle-double-down icon-send-action icon-left-right"/><br/>
            <Icon name="fa-envelope-o icon-send-action"/>
          </span>
        : pref.get('hasAcceptedProposal') 
          ?
            <span className="icon-contain">
              <Icon name="fa-angle-double-down icon-no-action"/><br/>
              <Icon name="fa-envelope-o icon-success-action"/>
            </span>
          : pref.get('hasRejectedProposal')
            ?
              <span className="icon-contain">
                <Icon name="fa-angle-double-down icon-no-action"/><br/>
                <Icon name="fa-envelope-o icon-failure-action"/>
              </span>
            :
              <span className="icon-contain">
                <Icon name="fa-angle-double-down icon-no-action"/><br/>
                <Icon name="fa-envelope-o icon-no-action"/>
              </span>
      }

      

      


    
    
     </td>
);

const TableBody = ({data}) => (
  <tbody>
    {data.map((entity,i) => 
      <tr>
        <TableCellEntity key={i} entity={entity} />
      {entity.get('prefs').map((pref,j) =>
        <TableCellPref key={j} data={data} pref={pref}/>
      )}
      </tr>
    )}
  </tbody>
);

class MatchTable extends Component {
  componentDidMount() {
    this.props.runFullDemo(this.props.fullDemo.get('data'));
  }

  render() {
    let data = this.props.demoType === 'fullDemo'
      ? this.props.fullDemo.get('data')
      : {};
   
    return (
      <table className="Match-table">
        <TableHeader data={data} />
        <TableBody data={data} />
      </table>   
    );
  }
}

MatchTable.propTypes = {

};

export default MatchTable;
