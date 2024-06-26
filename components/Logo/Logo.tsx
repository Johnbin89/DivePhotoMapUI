import classes from './Logo.module.css';
import {
  Group,
  Text,
  UnstyledButton,
  UnstyledButtonProps,
} from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';

type LogoProps = {
  href?: string;
} & UnstyledButtonProps;

const Logo = ({ href, ...others }: LogoProps) => {
  return (
    <UnstyledButton
      className={classes.logo}
      component={Link}
      href={href || '/'}
      {...others}
    >
      <Group gap="xs">
        <Image
          src="/underwater_map-32.png"
          height={24}
          width={24}
          alt="design sparx logo"
        />
        <Text fw={700}>Dive Photo Map</Text>
      </Group>
    </UnstyledButton>
  );
};

export default Logo;
