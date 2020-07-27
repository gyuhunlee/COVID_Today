import React from 'react';

const SortBy = (props) => {
  return (
    <div>
      <div id='dropdown'>
        <h3>SORT BY:</h3>
        <select id='sortby' onChange={(e) => props.sortByDropDown(e.target.value)}>
          <option value="">State Name ▲</option>
          <option value="statename-desc">State Name ▼</option>
          <option value="total-asc">Total ▲</option>
          <option value="total-desc">Total ▼</option>
        </select>
      </div>
    </div>
  )
}

export default SortBy;