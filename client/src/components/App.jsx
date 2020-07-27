import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import TableDataList from './TableDataList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      yesterdayData: [],
      covidData: []
    }
  }

  componentDidMount() {
    this.getRequest(this.getTodayDate());
  }

  getRequest(date) {
    var url = '/covid/domestic/' + date;
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
    var dd = String(timeNow.getDate()).padStart(2, '0');

    return Number(year + mm + dd);
  }

  render() {
    var { covidData } = this.state;
    var time = this.getTodayDate();
    return (
      <div>
        <h1 id='title'>COVID-19 Cases and Deaths As Of {time}</h1>
        <TableDataList covidData={this.state.covidData} />
      </div>
    )
  }
}

export default App;