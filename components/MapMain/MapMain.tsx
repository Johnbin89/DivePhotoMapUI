import { MutableRefObject, ReactNode, useEffect, useRef } from 'react';
import { Box, Container } from '@mantine/core';
import classes from './Map.module.css'; 
import { MapContainer, TileLayer, useMap, Marker, Popup, } from 'react-leaflet'
import { LatLngExpression } from 'leaflet';
import "leaflet/dist/leaflet.css";
import Leaflet from 'leaflet';
import { FullscreenControl } from "react-leaflet-fullscreen";
import "react-leaflet-fullscreen/styles.css";
Leaflet.Icon.Default.imagePath = 'https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/'

type MapMainProps = {
  children: ReactNode;
  centerposition: LatLngExpression;
  mapRef: MutableRefObject<any>;
};

type MapRefProps = {
  mapRef: MutableRefObject<any>;
};

const MapRef = ({mapRef}: MapRefProps) => {
  const map = useMap();
  useEffect(() => {
    if (map) {
      mapRef.current = map;
    }
    return () => {
      mapRef.current = null;
    };
  }, [map]);

  return null;
};

const resizeMap = (mapRef: MutableRefObject<any>) => {
  const resizeObserver = new ResizeObserver(() => mapRef.current?.invalidateSize())
  const container = document.getElementById('map-container')
  if (container) {
    resizeObserver.observe(container)
  }
}


const MapMain = ({ children, centerposition, mapRef }: MapMainProps) => {



  return (
    <Container fluid py="lg" px="md" className={classes.main} style={{ overflow: 'hidden' }}>
      <MapContainer center={centerposition} zoom={11} scrollWheelZoom={true} style={{ height: "100%", zIndex: 0 }} id="map-container"
      whenReady={() => resizeMap(mapRef)}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FullscreenControl/>
        <MapRef mapRef={mapRef}/>
        {children}
      </MapContainer>
    </Container>
  ); 
};

export default MapMain;
