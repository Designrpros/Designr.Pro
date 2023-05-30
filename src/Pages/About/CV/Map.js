import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '200px',
  height: '200px'
};

const center = {
  lat: 59.9225,
  lng: 10.5222
};

function MapComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCKj_D27aZ97bszhBjLlP9voFZRAqiEpMk"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MapComponent);
