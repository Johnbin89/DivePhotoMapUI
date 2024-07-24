'use client';

import {
  Button,
  Center,
  Flex,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  TextProps,
  Title,
  useMantineTheme,
} from '@mantine/core';
import Link from 'next/link';
import { PATH_AUTH, PATH_MAP } from '@/routes';
import { useColorScheme, useMediaQuery } from '@mantine/hooks';
import { Metadata } from 'next';
import { Surface } from '@/components';
import classes from './page.module.css';

function Page() {
  const theme = useMantineTheme();
  const colorScheme = useColorScheme();
  const mobile_match = useMediaQuery('(max-width: 425px)');

  const LINK_PROPS: TextProps = {
    className: classes.link,
  };

  return (
    <>
      <>
        <title>Sign up | DiveMap</title>
        <meta
          name="description"
          content="Sign up to DiveMap"
        />
      </>
      <Title ta="center">Create your account</Title>

      <Surface component={Paper} className={classes.card}>
        <Flex direction={{ base: 'column', sm: 'row' }} gap={{ base: 'md' }}>
          <TextInput
            label="First name"
            placeholder="John"
            required
            classNames={{ label: classes.label }}
          />
          <TextInput
            label="Last name"
            placeholder="Doe"
            required
            classNames={{ label: classes.label }}
          />
        </Flex>
        <TextInput
          label="Email"
          placeholder="you@mantine.dev"
          required
          mt="md"
          classNames={{ label: classes.label }}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
          classNames={{ label: classes.label }}
        />
        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm password"
          required
          mt="md"
          classNames={{ label: classes.label }}
        />
        <Button
          fullWidth
          mt="xl"
          component={Link}
          href={PATH_MAP.public}
        >
          Create account
        </Button>
        <Center mt="md">
          <Text
            size="sm"
            component={Link}
            href={PATH_AUTH.signin}
            {...LINK_PROPS}
          >
            Already have an account? Sign in
          </Text>
        </Center>
      </Surface>
    </>
  );
}

export default Page;
