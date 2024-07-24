'use client';

import {
  Button,
  Center,
  Checkbox,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  TextProps,
  Title,
} from '@mantine/core';
import Link from 'next/link';
import { PATH_AUTH, PATH_MAP } from '@/routes';
import { Metadata } from 'next';
import { Surface } from '@/components';
import classes from './page.module.css';

function Page() {
  const LINK_PROPS: TextProps = {
    className: classes.link,
  };
  return (
    <>
      <>
        <title>Sign in | DiveMap</title>
        <meta
          name="description"
          content="Sign In to Divemap"
        />
      </>

      <Surface component={Paper} className={classes.card}>
        <TextInput
          label="Email"
          placeholder="you@mantine.dev"
          required
          classNames={{ label: classes.label }}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
          classNames={{ label: classes.label }}
        />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Remember me" classNames={{ label: classes.label }} />
          <Text
            component={Link}
            href={PATH_AUTH.passwordReset}
            size="sm"
            {...LINK_PROPS}
          >
            Forgot password?
          </Text>
        </Group>
        <Button
          fullWidth
          mt="xl"
          component={Link}
          href={PATH_MAP.public}
        >
          Sign in
        </Button>
        <Center mt="md">
          <Text
            fz="sm"
            ta="center"
            component={Link}
            href={PATH_AUTH.signup}
            {...LINK_PROPS}
          >
            Do not have an account yet? Create account
          </Text>
        </Center>
      </Surface>
    </>
  );
}

export default Page;
