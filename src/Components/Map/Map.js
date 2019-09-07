import React, { useState, useEffect } from 'react';
import './Map.css';

import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';



export default withScriptjs(withGoogleMap((props) => {
  /** set react hooks for state */
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [location, setLocation] = useState({
    lat: 60.244961,
    lng: 24.989050
  });


  // console.log(props.api)

  /** get user location */
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      // console.log('lat, long: ', position.coords.latitude, position.coords.longitude);
      setLocation({ lat: position.coords.latitude, lng: position.coords.longitude })
    }
    )
  },
    []
  )

  return (

    <GoogleMap

      defaultZoom={14}

      defaultCenter={{ lat: 60.201839, lng: 24.935221 }}
      center={{ lat: location.lat, lng: location.lng }}

    >
      {/** data pass as props from app.js */}
      {props.api.map((event, index) => (

        <Marker

          key={index}
          position={{
            lat: event.location.lat,
            lng: event.location.lon
          }}
          onClick={() => {
            setSelectedEvent(event);
          }}
        />
      ))}

      {selectedEvent && (
        <InfoWindow
          position={{
            lat: selectedEvent.location.lat,
            lng: selectedEvent.location.lon
          }}
          onCloseClick={() => {
            setSelectedEvent(null);
          }}
        >
          <div>
            <h3>{selectedEvent.name.fi}</h3>
            <p>{selectedEvent.description.intro}</p>
            <p>{selectedEvent.location.address.street_address}</p>
            <p>{selectedEvent.info_url}</p>
            <p>Starting date: {selectedEvent.event_dates.starting_day}</p>
            <p>Ending date: {selectedEvent.event_dates.ending_day}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>

  );

}

));