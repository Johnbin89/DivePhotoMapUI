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
import { useRef } from 'react';
import { useFetchData } from '@/hooks';
import DiveCard from '@/components/DiveCard/DiveCard';
import styled from '@emotion/styled';


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

const position: LatLngExpression = [37.75928 	, 24.07465]

function Weekdives() {
  const mapRef = useRef(null);
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const PopupStyle = styled(Popup)(() => ({
    "& .leaflet-popup-content-wrapper, & .leaflet-popup-tip": {
      background: colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
    },
  }));
  const {
    data: divesData,
    loading: divesLoading,
    error: divesError,
  } = useFetchData('/mocks/WeekDives.json');
  const divesItems = divesData.map((p: any) => (
    <DiveCard key={p.id} {...p} {...CARD_PROPS} />
  ));
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
          <Popup minWidth={190}>
          <style jsx global>{`
        .leaflet-popup-content-wrapper, & .leaflet-popup-tip {
          background: ${colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1]};
        }
      `}</style>
            <DiveCard
              id={'1'}
              title={'Profitis Ilias'}
              description={'Lets Dive!'}
              status={'active'}
              cost={65}
              maxDivers={8}
              link={'#href'}
              newsletterLink={'#href'}
            /> 
          </Popup>
        </Marker>
      </MapMain>

    </>
  );
}

export default Weekdives;
