import React from 'react';

const SortBy = (props) => {
  return (
    <div>
      <div id='dropdown'>
      <h3>DATE:</h3>
        <select id='dateSelect' onChange={(e) => props.dateDropDown(e.target.value)}>
          <option value="20200727">July 27</option>
          <option value="20200726">July 26</option>
          <option value="20200725">July 25</option>
        </select>

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