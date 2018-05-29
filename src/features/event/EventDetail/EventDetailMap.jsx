import React from 'react'
import { Segment, Icon } from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react';

const EventDetailMap = ({lat, lng}) => {
  const center = [lat, lng]
  const zoom = 14
  const Marker = () => (
      <Icon size="big" name="marker" color="red" />
  )
  return (
    <Segment attached="bottom" style={{padding: 0}}>
      {/* Important! Always set the container height explicitly */}
      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB-OcIwRFz4Ku4EHYSxQZ-owWDi6iIUo6c" }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker
            lat={lat}
            lng={lng}
          />
        </GoogleMapReact>
      </div>
    </Segment>
  )
}

export default EventDetailMap
