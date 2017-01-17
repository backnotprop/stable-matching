import React, { Component, PropTypes } from 'react';

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
  <td>{entity.get('name')}</td>
);

const TableCellPref = ({data, pref}) => (
  <td>{data.get(pref.get('id').toString()).get('name')} </td>
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
  render() {

    let data = this.props.demoType === 'full'
      ? this.props.fullDemoData
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
