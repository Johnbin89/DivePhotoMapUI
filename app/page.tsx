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
import { LatLngExpression } from 'leaflet';
import { FC, Key, ReactNode, Suspense, useEffect, useRef, useState } from 'react';
import { useFetchData, useFetchSWR } from '@/hooks';
import {LazyPopup, LazyMarker, LazyMap, LazyMarkerCluster} from '@/components/LazyLeaflet/LazyPopup';
import LazyDiveCard from '@/components/DiveCard/LazyDiveCard'
import styled from '@emotion/styled';
import GuestLayout from '@/layout/Guest';
import { useMounted } from '@mantine/hooks';
import Loading from './loading';

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


function HomePage() {
  const mounted = useMounted();
  const mapRef = useRef(null);
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const [markers, setMarkers] = useState(Array<any>)
  const PopupStyle = styled(LazyPopup)(() => ({
    "& .leaflet-popup-content-wrapper, & .leaflet-popup-tip": {
      background: colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
    },
  }));

  const { data: markersData, error: markersError } = useFetchSWR('dj/markers/public/')


  return (
    <Suspense key={mounted ? "client" : "server"} fallback={<Loading/>}>
    <GuestLayout>
      <LazyMap centerposition={profIliasPosition} mapRef={mapRef}>
        <LazyMarkerCluster>
          {markersData?.map((marker:any , index: Key) => (
            <LazyMarker
              key={index}
              position={[marker.posLat, marker.posLng]}
            >
              <LazyPopup minWidth={190}>
                <style jsx global>{`
        .leaflet-popup-content-wrapper, & .leaflet-popup-tip {
          background: ${colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1]};
        }
      `}</style>
                <LazyDiveCard
                  id={index.toString()}
                  title={marker.divespot.name}
                  description={marker.divespot.description}
                  status={'active'}
                  dive_type={marker.divespot.dive_type}
                  access_type={marker.divespot.access_type}
                  link={'#href'}
                  newsletterLink={'#href'}
                />
              </LazyPopup>

            </LazyMarker>
          ))}
        </LazyMarkerCluster>
      </LazyMap>
    </GuestLayout>
    </Suspense>
  );
}

export default HomePage;
