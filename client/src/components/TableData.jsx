import React from 'react';

const TableData = (props) => {
  const { eachData } = props;

  return (
    <div>
      {eachData.positive}
    </div>
  )
}

export default TableData;