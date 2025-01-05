import { FC, ReactNode, useEffect, useState } from 'react';
import {
  Marker as LMarker,
  MarkerProps,
} from 'react-leaflet';
import { Icon } from 'leaflet';
import { diveTypeIcon } from '@/components/MapMain/Icons';


type DiveSpotTypeProp = {
    dive_type: string;
  };

const MarkerWithIcon: FC<DiveSpotTypeProp & MarkerProps> = props => {
    const { dive_type, ...markerProps } = props;
    const [icon, setIcon] = useState<Icon<{
        iconUrl: string;
    }> | Icon.Default>();

    useEffect(
        () => {
            // loading 'leaflet' dynamically when the component mounts
            const loadIcon = async () => {
                const L = await import('leaflet');
                const iconObject = diveTypeIcon(dive_type)
                setIcon(iconObject);
            }
            loadIcon();
        },
        []
    );

    // waiting for icon to be loaded before rendering
    return !icon ? null : (
        <LMarker
            {...props}
            icon={icon}
        />
    );
};

export default MarkerWithIcon