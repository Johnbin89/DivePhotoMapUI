'use client';

import {
  Anchor,
  Container,
  Paper,
  PaperProps,
  CardProps,
  Stack,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { PATH_MAP } from '@/routes';
import { PageHeader, Surface } from '@/components';
import { Metadata } from 'next';
import { useMap, Marker, Popup, } from 'react-leaflet'
import { LatLngExpression } from 'leaflet';
import MapMain from '@/components/MapMain';
import { Key, useEffect, useRef, useState } from 'react';
import { useFetchData, useFetchSWR } from '@/hooks';
import DiveCard from '@/components/DiveCard/DiveCard';
import styled from '@emotion/styled';
import GuestLayout from '@/layout/Guest';
import MarkerClusterGroup from '@changey/react-leaflet-markercluster';

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

const CARD_PROPS: Omit<CardProps, 'children'> = {
  p: 'md',
  shadow: 'md',
  radius: 'md',
};

const profIliasPosition: LatLngExpression = [37.75928, 24.07465]
const patrisPosition: LatLngExpression = [37.58178, 24.26677]
const mockMarkers = [profIliasPosition, patrisPosition]

function HomePage() {
  const mapRef = useRef(null);
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const [markers, setMarkers] = useState(Array<any>)
  const PopupStyle = styled(Popup)(() => ({
    "& .leaflet-popup-content-wrapper, & .leaflet-popup-tip": {
      background: colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
    },
  }));

  const { data: markersData, error: markersError } = useFetchSWR('dj/markers/public/')



  return (
    <GuestLayout>
      <MapMain centerposition={profIliasPosition} mapRef={mapRef}>
        <MarkerClusterGroup>
          {markersData?.map((marker, index) => (
            <Marker
              key={index}
              position={[marker.posLat, marker.posLng]}
            >
              <Popup minWidth={190}>
                <style jsx global>{`
        .leaflet-popup-content-wrapper, & .leaflet-popup-tip {
          background: ${colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1]};
        }
      `}</style>
                <DiveCard
                  id={index.toString()}
                  title={marker.divespot.name}
                  description={marker.divespot.description}
                  status={'active'}
                  cost={65}
                  maxDivers={8}
                  link={'#href'}
                  newsletterLink={'#href'}
                />
              </Popup>

            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapMain>
    </GuestLayout>
  );
}

export default HomePage;
