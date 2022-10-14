import { useMemo} from 'react';
import { GoogleMap, useLoadScript, MarkerF, Circle } from '@react-google-maps/api';
import '../Map/map.css';


const Map = () => {
  const center = useMemo(() => ({ lat: 40.65351931666059, lng: -73.87004964109374 }), []);
  const { isLoaded } = useLoadScript({
    // i know this is must be in local file, but i don't understand why it's does not work 
    googleMapsApiKey: 'AIzaSyCAS4oGrnHvJOo5-EkotI3js26WomOo8yg'
  });

  if (!isLoaded) {
    return `Loading...`
  };

  return (
    <div className='map__container'>
    <GoogleMap zoom={13} center={center} mapContainerClassName='map'>
      <MarkerF key='Im here' position={center} />
      </GoogleMap>
    </div>
  )
  
};

export default Map;