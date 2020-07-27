import React from 'react';

import TableData from './TableData.jsx';

const TableDataList = (props) => {
  const { covidData } = props;
  console.log('tabledatalist:', covidData);
  return (
    <div>
      {
        covidData.map(eachData => (
          <TableData eachData={eachData} key={eachData.id}/>
        ))
      }
    </div>
  )
};

export default TableDataList;