import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import TableDataList from './TableDataList.jsx';
import SortBy from './SortBy.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      yesterdayData: [],
      covidData: [],
      theDate: this.getTodayDate(),
      sorting: ""
    }
  }

  componentDidMount() {
    this.getRequest(this.state.theDate);
  }

  getRequest(date, sort) {
    var url = '/covid/domestic/' + date;
    if (sort) {
      url += '/' + sort;
    }
    console.log(url);
    axios.get(url)
    .then(covid => {
      this.setState({
        yesterdayData: this.state.covidData,
        covidData: covid.data
      })
    })
  }

  getTodayDate(selectedDate) {
    var timeNow = selectedDate || new Date();
    var year = String(timeNow.getFullYear());
    var mm = String(timeNow.getMonth() + 1).padStart(2, '0');
    var dd = String(timeNow.getDate() - 1).padStart(2, '0');
    var hh = timeNow.getHours();

    if (hh > 14) {
      dd = Number(dd) + 1
      dd = String(dd).padStart(2, '0');
    }
    return Number(year + mm + dd);
  }

  tableTitle(date) {
    date = date.toString().split('');
    return date.reduce((acc, digit, index) => {
      if (index === 4 || index === 6) {
        acc += '/' + digit;
      } else {
        acc += digit;
      }
      return acc;
    }, '');
  }

  sortByDropDown(value) {
    this.getRequest(this.state.theDate, value);
    this.setState({
      sorting: value
    })
  }

  dateDropDown(date) {
    this.getRequest(date, this.state.sorting);
    this.setState({
      theDate: date
    })
  }

  render() {
    var { covidData } = this.state;
    var time = this.tableTitle(this.getTodayDate());
    return (
      <div>
        <h1 id='title'>COVID-19 Cases and Deaths As Of {time}</h1>
        <SortBy dateDropDown={this.dateDropDown.bind(this)}
                sortByDropDown={this.sortByDropDown.bind(this)} />
        <TableDataList covidData={covidData} />
      </div>
    )
  }
}

export default App;