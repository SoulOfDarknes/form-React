import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import '../Map/map.css';

const center = {lat: 40.65351931666059, lng: -73.87004964109374}
const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.PUBLIC_URL
  })

  if (!isLoaded) {
  return `Loading...`
}

  return (  
    
  
    <GoogleMap zoom={10} center={center} mapContainerClassName='map' > map</GoogleMap> 
  
      
    )
  
}

export default Map;