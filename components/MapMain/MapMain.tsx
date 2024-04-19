import { MutableRefObject, ReactNode } from 'react';
import { Box } from '@mantine/core';
import classes from './Map.module.css'; import { MapContainer, TileLayer, useMap, Marker, Popup, } from 'react-leaflet'
import { LatLngExpression } from 'leaflet';
import "leaflet/dist/leaflet.css";
import Leaflet from 'leaflet';
Leaflet.Icon.Default.imagePath = 'https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/'

type MapMainProps = {
  children: ReactNode;
  centerposition: LatLngExpression;
  mapRef: MutableRefObject<any>;
};

const MapMain = ({ children, centerposition, mapRef }: MapMainProps) => {
  return (
    <Box py="lg" px="md" className={classes.main}>
      <MapContainer center={centerposition} zoom={13} scrollWheelZoom={false} style={{ height: "100%", zIndex: 0 }} ref={mapRef}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {children}
      </MapContainer>
    </Box>
  );
};

export default MapMain;
