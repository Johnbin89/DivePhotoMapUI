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
import { useMap, Marker, Popup, } from 'react-leaflet'
import { LatLngExpression } from 'leaflet';
import MapMain from '@/components/MapMain';
import { useRef } from 'react';


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
  const mapRef = useRef(null);
  return (
    <>
      <>
        <title>Week Dives</title>
        <meta
          name="description"
          content="Weekly dives from dive centers newsletters."
        />
      </>
      <MapMain centerposition={position} mapRef={mapRef}>
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapMain>

    </>
  );
}

export default Weekdives;
