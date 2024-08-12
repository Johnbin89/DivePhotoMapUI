import MarkerClusterGroup from '@changey/react-leaflet-markercluster'

import type { FC, ReactNode } from 'react'
import React from 'react'
const MarkerCluster: FC<{
  children: ReactNode
}> = ({ children }) => {
  return (
    <MarkerClusterGroup
      showCoverageOnHover={false}
    >
      {children}
    </MarkerClusterGroup>
  )
}

export default MarkerCluster;