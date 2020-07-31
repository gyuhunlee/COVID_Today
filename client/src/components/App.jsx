import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import TableDataList from './TableDataList.jsx';
import SortBy from './SortBy.jsx';
import StateMap from './StateMap.jsx';

import mapSampleData from '../helper/mapData.js';
import colorScale from '../helper/colorScale.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      covidData: [],
      theDate: this.getTodayDate(),
      sorting: "",
      mapData: mapSampleData,
      dates: []
    }
  }

  componentDidMount() {
    this.getRequest(this.state.theDate);
    this.getRequestForDates();
  }

  getRequest(date, sort) {
    var url = '/covid/domestic/' + date;
    if (sort) {
      url += '/' + sort;
    }
    axios.get(url)
    .then(covid => {
      this.populateMapData(covid.data);
      this.setState({
        covidData: covid.data
      })
    })
  }

  getRequestForDates() {
    axios.get('/getdata')
    .then(dateGiven => {
      this.setState({
        dates: dateGiven.data
      })
    })
  }

  populateMapData(array) {
    for (let i = 0; i < array.length; i++) {
      var state = array[i].statename
      if (mapSampleData[state]) {
        mapSampleData[state].total = array[i].total;
      }
    }
    this.setState({
      mapData: colorScale(mapSampleData)
    });
  }

  getTodayDate(selectedDate) {
    var timeNow = selectedDate || new Date();
    var year = String(timeNow.getFullYear());
    var mm = String(timeNow.getMonth() + 1).padStart(2, '0');
    var dd = String(timeNow.getDate()).padStart(2, '0');
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
        <StateMap mapData={colorScale(this.state.mapData)} />
        <SortBy dateDropDown={this.dateDropDown.bind(this)}
                sortByDropDown={this.sortByDropDown.bind(this)}
                dates={this.state.dates} />
        <TableDataList covidData={covidData} />
      </div>
    )
  }
}

export default App;