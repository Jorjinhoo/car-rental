import { useState, useEffect} from 'react';
import { GoogleMap, Marker, LoadScript, InfoWindow } from '@react-google-maps/api';

import styles from "../../styles/googleMap.module.scss";



const GoogleMapComponent = () => {

  const [infoWindow, setInfoWindow] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [zoom, setZoom] = useState<number>(6.2);

  const markers = [
    { lat: 52.19912371785977, lng: 21.0388183593756, description: "City, Random Street 1, 01-54" },
    { lat: 51.05341257918779, lng: 17.105712890625, description: "City, Random Street 2, 01-110" },
    { lat: 54.38631433274785, lng: 18.602153436991994, description: "City, Random Street 3, 03-53" },
    { lat: 53.13352628393782, lng: 23.171341339475365, description: "City, Random Street 4, 38" },
    { lat: 52.4054453350319, lng: 20.425759085155647, description: "City, Random Street 5, 01-55" },
  ];

  const center = {
    lat: 51.793686,
    lng: 19.108502,
  };


  const handleMarkerClick = (markerIndex: number) => {
    setInfoWindow(markerIndex); 
  };

  const handleMapClick = () => {
    setInfoWindow(null);
  };


  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    switch (true) {
      case windowWidth < 500:
        setZoom(5.2);
        break;
      default:
        setZoom(6.2);
    }
  }, [windowWidth]); 

  return (
    <LoadScript googleMapsApiKey={`${process.env.REACT_APP_MAP_API_KEY}`}>
      <GoogleMap mapContainerClassName={styles.container} 
                 center={center} 
                 zoom={zoom}
                 onClick={handleMapClick}
                 >
        {markers.map((marker, index) => (
          <Marker key={index} 
                  position={{ lat: marker.lat, lng: marker.lng }}
                  onClick={() => handleMarkerClick(index)} 
                  />
        ))}
        {infoWindow !== null && (
          <InfoWindow
            position={{
              lat: markers[infoWindow].lat,
              lng: markers[infoWindow].lng,
            }}
            onCloseClick={() => setInfoWindow(null)}
          >
            <div>{markers[infoWindow].description}</div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;