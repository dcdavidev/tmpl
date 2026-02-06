import { Box } from '@pittorica/react';

import topHero from '~/images/lading-top-hero.webp';

export default function IndexRoute() {
  return (
    <>
      <Box
        id="top"
        style={{
          minHeight: '60vh',
          backgroundImage: `url(${topHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></Box>
    </>
  );
}
