import React, { Component } from 'react';
import './Home.css';
import Map from '../Map/Map';


class Home extends Component {
  render() {

    const { error, loading } = this.props;

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="map">
        <Map
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_API_KEY}`}
          containerElement={<div className="container-element" />}
          loadingElement={<div className="loading-element" />}
          mapElement={<div className="map-element" />}
          api={this.props.apiData}
        />
      </div>
    );
  }
}

export default Home;