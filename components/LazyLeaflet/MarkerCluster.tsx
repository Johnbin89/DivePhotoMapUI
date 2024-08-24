import MarkerClusterGroup from '@changey/react-leaflet-markercluster'
import styles from './MarkerCluster.module.css';
import type { FC, ReactNode } from 'react'
import React from 'react'
const MarkerCluster: FC<{
  children: ReactNode
}> = ({ children }) => {
  return (
    <MarkerClusterGroup
      classNames={styles}
      showCoverageOnHover={false}
    >
      {children}
    </MarkerClusterGroup>
  )
}

export default MarkerCluster;
