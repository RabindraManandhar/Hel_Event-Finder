import React, { Component } from 'react';
import './Home.css';
import EventsCards from './EventsCards';


class Home extends Component {
    render() {
    const {error, loading, apiData} = this.props;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (loading) {
      return <div>Loading...</div>;
    } else {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <EventsCards api={this.props.apiData}/>
                    </div>
                </div>
            </div>
        );
    }
    }
}

export default Home;