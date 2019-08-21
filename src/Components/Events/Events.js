import React, { Component } from 'react';
import './Events.css';
import EventsCards from './EventsCards/EventsCards';
import SearchArea from './SearchArea/SearchArea';

class Events extends Component {
    render() {
        
        const { error, loading } = this.props;
        
        if (error) {
            return <div>Error: {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        } 
        
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <SearchArea options={this.props.options} handleChange={this.props.handleChange} />
                        <EventsCards api={this.props.apiData} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Events;
