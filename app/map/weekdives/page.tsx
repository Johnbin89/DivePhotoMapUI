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

    </>
  );
}

export default Weekdives;
