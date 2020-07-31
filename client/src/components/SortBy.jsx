import React from 'react';

const SortBy = (props) => {
  var { dates } = props;
  return (
    <div>
      <div id='dropdown'>
      <h3>DATE:</h3>
        <select id="dateSelect" onChange={(e) => props.dateDropDown(e.target.value)}>
          <option value=''>Select Date</option>
          {
            dates.map(eachDay => (
              <option value={eachDay.today}>{eachDay.today}</option>
            ))
          }
        </select>

        <h3>SORT BY:</h3>
        <select id='sortby' onChange={(e) => props.sortByDropDown(e.target.value)}>
        <option value="">Sort By</option>
          <option value="statename-asc">State Name ▲</option>
          <option value="statename-desc">State Name ▼</option>
          <option value="total-asc">Total ▲</option>
          <option value="total-desc">Total ▼</option>
        </select>
      </div>
    </div>
  )
}

export default SortBy;