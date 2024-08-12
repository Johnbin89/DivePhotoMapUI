import dynamic from 'next/dynamic';

const LazyDiveCard = dynamic(  async () => (await import('./DiveCard')),
{
  ssr: false,
});

export default LazyDiveCard;