import React from 'react';
import ReactDOM from 'react-dom';

import Datamap from 'datamaps';
import mapConfig from '../helper/map.config.js';


class StateMap extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      data: null
    };
    this.mapConfig = mapConfig;
    this.mapConfig.data = this.props.mapData;
  }

  componentDidMount() {
    this.myMap = new Datamap(
      Object.assign({}, this.mapConfig, {
        element: this.myRef.current,
        responsive: true
      })
    );
    this.myMap.labels();
  }

  render() {
    return (
      <div className="map" ref={this.myRef}></div>
    );
  }
}


export default StateMap;



// https://github.com/markmarkoh/datamaps/blob/master/README.md#getting-started

// https://datamaps.github.io/