'use client';

import { BackgroundImage, Center, Stack } from '@mantine/core';
import Image from 'next/image';
import React, { ReactNode } from 'react';

type AuthProps = {
  children: ReactNode;
};

function SignUpLayout({ children }: AuthProps) {
  return (
    <BackgroundImage
      src="/sign-up-bg.png"
      radius="sm"
    >
          <Center
            style={{
              height: '100vh',
              width: '100vw',
            }}
          >
            <Stack>
              <Center>
                <Image
                  src="/underwater_map-1024.png"
                  alt="DiveMap logo"
                  width={192}
                  height={192}
                  style={{ objectFit: 'contain' }}
                />
              </Center>
              {children}
            </Stack>
          </Center>
    </BackgroundImage>
  );
}

export default SignUpLayout;
