import React, {Component} from 'react';
import './EventsCards.css';
import {Button} from 'reactstrap';

class EventsCards extends Component {
    render() {
        // console.log(this.props.apiData)
        return (
            <div>
                {this.props.api.map((eventCard, index) => {
                    return (
                        <div className="col s12 m6 l4" key={index}>
                            <div className="card">
                                <div className="card-image waves-effect waves-block waves-light">
                                    {
                                        <img src={eventCard.description.images.length ? eventCard.description.images[0].url : `http://www.bruttles.com/layout/images/NoPhotoDefault.png?1323807363`} alt="Card" style={{width: "100%", height: 240}} />
                                    }
                                </div>
                                <div className="card-title">
                                    <div><strong>Event Name:</strong></div>
                                        <span>{eventCard.name.fi}</span>
                                </div>
                                <div className="card-content">
                                    <div><strong>Event Descriptions:</strong></div>
                                        <span>{eventCard.description.intro}</span>
                                    <div><strong>Event Date:</strong></div>
                                        <span>{eventCard.event_dates.starting_day}</span>
                                </div>
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