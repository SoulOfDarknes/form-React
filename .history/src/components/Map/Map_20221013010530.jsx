import React from 'react';
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api';

const center = {579 Gateway Dr, Brooklyn, NY 11239, }
const Map = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  if (!isLoaded) {
  return `Loading...`
}

  return (  
    
  
      <div> <GoogleMap center={} > </GoogleMap> </div>
  
      
    )
  
}

export default Map;