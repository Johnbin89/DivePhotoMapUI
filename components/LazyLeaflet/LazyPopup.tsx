import dynamic from 'next/dynamic'

const LazyMap = dynamic(() => import("@/components/MapMain"), {
    ssr: false,
  });

const LazyPopup = dynamic(  async () => (await import('react-leaflet')).Popup,
{
  ssr: false,
});

const LazyMarker = dynamic(  async () => (await import('react-leaflet')).Marker,
{
  ssr: false,
});

const LazyMarkerCluster = dynamic(  async () => (await import('@/components/LazyLeaflet/MarkerCluster')),
{
  ssr: false,
});

export {LazyPopup, LazyMarker, LazyMap, LazyMarkerCluster}