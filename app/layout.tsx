'use client';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { Open_Sans } from 'next/font/google';
import { myTheme } from '@/theme';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/notifications/styles.css';
import 'mantine-datatable/styles.layer.css';
import './globals.css';

// If loading a variable font, you don't need to specify the font weight
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <head>
        <title>Dive Photo Map</title>
        <link
          rel="underwater_map-192"
          sizes="191x182"
          href="/underwater_map-192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x31"
          href="/underwater_map-32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x15"
          href="/underwater_map-16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content="Upload underwater photos, pin them on the map. See weekly scheduled dives on the map. Diving calc tools"
        />

        <script
          src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js"
          defer
        ></script>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <MantineProvider theme={myTheme} defaultColorScheme="auto">
          <Notifications position="bottom-right" zIndex={1000} />
          <ModalsProvider>{children}</ModalsProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
