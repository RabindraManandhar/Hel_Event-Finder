import React, {Component} from 'react';
import {Button} from 'reactstrap';

class EventsCards extends Component {
    render() {
        // console.log(this.props.apidata)
        return (
            <div>
                {this.props.apidata.map((eventCard, index) => {
                    return (
                        <div className="col s12 m6 l3" key={index}>
                            <div className="card">
                                <div className="card-image waves-effect waves-block waves-light">
                                    {
                                        <img src={eventCard.description.images.length ? eventCard.description.images[0].url : `http://www.bruttles.com/layout/images/NoPhotoDefault.png?1323807363`} alt="Card" style={{width: "100%", height: 360}} />
                                    }
                                </div>
                                <div className="card-title">
                                    <div>Event name:{eventCard.name.fi}</div>
                                </div>
                                <div className="card-content">
                                    <div>Event Descriptions:{eventCard.description.intro}</div>
                                    <div>Event Date: {eventCard.event_dates.starting_day}</div>

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