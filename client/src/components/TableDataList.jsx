import React from 'react';

import TableData from './TableData.jsx';

const TableDataList = (props) => {
  const { covidData } = props;

  function tableHeader() {
    const headers = <tr>
      <th>State</th>
      <th>Positive</th>
      <th>Positive Increase</th>
      <th>Death Increase</th>
      <th>Total</th>
    </tr>
    return headers;
  };

  return (
    <div>
      <table id='table'>
        <tbody>
          <tr>
            <th>State</th>
            <th>Positive</th>
            <th>Positive Increase</th>
            <th>Death Increase</th>
            <th>Total</th>
          </tr>
          {
            covidData.map(eachData => (
              <TableData eachData={eachData} key={eachData.id}/>
            ))
          }
        </tbody>
      </table>
    </div>
  )
};

export default TableDataList;