'use client';

import {
  Anchor,
  Container,
  Paper,
  PaperProps,
  Stack,
  Text,
} from '@mantine/core';
import { PATH_MAP } from '@/routes';
import { PageHeader, Surface } from '@/components';
import { Metadata } from 'next';
import { MapContainer, TileLayer, useMap, Marker, Popup, } from 'react-leaflet'
import { LatLngExpression } from 'leaflet';
import "leaflet/dist/leaflet.css";

const items = [
  { title: 'Dashboard', href: PATH_MAP.public },
  { title: 'Pages', href: '#' },
  { title: 'Blank', href: '#' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

const PAPER_PROPS: PaperProps = {
  p: 'md',
  shadow: 'md',
  radius: 'md',
};

const position: LatLngExpression = [51.505, -0.09]

function Weekdives() {
  return (
    <>
      <>
        <title>Week Dives</title>
        <meta
          name="description"
          content="Weekly dives from dive centers newsletters."
        />   
      </>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "90vh" }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
    </>
  );
}

export default Weekdives;
