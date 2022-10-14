import { useMemo} from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

import "../Map/map.scss";



const Map = () => {
  const center = useMemo(() => ({ lat: 40.65351931666059, lng: -73.87004964109374 }), []);
  const { isLoaded } = useLoadScript({
    // i know this is must be in local file, but i don't understand why it's does not work 
    googleMapsApiKey: "AIzaSyCAS4oGrnHvJOo5-EkotI3js26WomOo8yg"
  });

  if (!isLoaded) {
    return `Loading...`
  };

  return (
    
    <GoogleMap zoom={13} center={center} mapContainerClassName="map">
      <MarkerF key="map" position={center} />
      </GoogleMap>
    
  )
};

export default Map;