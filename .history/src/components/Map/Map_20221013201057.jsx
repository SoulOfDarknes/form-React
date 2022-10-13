import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

const center = {lat: 40.65351931666059, lng: -73.87004964109374}
const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  if (!isLoaded) {
  return `Loading...`
}

  return (  
    
  
      <div> <GoogleMap center={center} > Map</GoogleMap> </div>
  
      
    )
  
}

export default Map;