import React, { Component } from 'react';
import './EventsCards.css';
import { Button } from 'reactstrap';

class EventsCards extends Component {
    render() {
        return (
            <div>
                {this.props.api.map((eventCard, index) => {
                    return (
                        <div className="col s12 m6 l4" key={index}>
                            <div className="card">
                                <div className="card-image waves-effect waves-block waves-light">
                                    {
                                        <img src={eventCard.description.images.length ? eventCard.description.images[0].url : `http://www.bruttles.com/layout/images/NoPhotoDefault.png?1323807363`} alt="Card" />
                                    }
                                </div>
                                <h3>{eventCard.name.fi}</h3>
                                <p>{eventCard.location.address.street_address}</p>
                                <p>Starting date: {eventCard.event_dates.starting_day}</p>
                                <Button>View Details</Button>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default EventsCards;

