import React, { Component } from 'react';
import './Events.css';
import EventsCards from './EventsCards';
import SearchArea from './SearchArea';

class Events extends Component {
    render() {
    const {error, loading} = this.props;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (loading) {
      return <div>Loading...</div>;
    } else {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <SearchArea handleInputChange={this.props.handleInputChange} handleSubmit={this.props.handleSubmit} handleDistanceChange={this.props.handleDistanceChange} handleDistanceSubmit={this.props.handleDistanceSubmit} />
                        <EventsCards api={this.props.apiData}/>
                    </div>
                </div>
            </div>
        );
    }
    }
}

export default Events;