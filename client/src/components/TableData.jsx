import React from 'react';

const TableData = (props) => {
  const { eachData } = props;

  return (
      <tr>
        <td>{eachData.statename}</td>
        <td>{eachData.positive}</td>
        <td>{eachData.positiveIncrease}</td>
        <td>{eachData.deathIncrease}</td>
        <td>{eachData.total}</td>
      </tr>

  )
}

export default TableData;