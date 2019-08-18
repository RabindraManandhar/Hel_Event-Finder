import React, { Component } from 'react';
import './Events.css';
import EventsCards from './EventsCards';
import SearchArea from './SearchArea';

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
                        <SearchArea handleChange={this.props.handleChange} handleSubmit={this.props.handleSubmit} />
                        <EventsCards api={this.props.apiData} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Events;
