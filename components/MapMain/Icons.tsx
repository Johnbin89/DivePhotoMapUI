import { Icon } from "leaflet"


//Define custom icons for different categories
const diveMarkerIcon = (path: string) => {

    return new Icon({
        iconUrl: path,
        iconAnchor: [17, 3]})

} 


  // Function to get the appropriate icon for a dive_type
  const diveTypeIcon = (dive_type: string) => {
    if (dive_type === 'Wreck') {
      return diveMarkerIcon('/wreck-marker-s.png');
    } else if ((dive_type === 'Cave') || (dive_type === 'Cavern')) {
      return diveMarkerIcon('/UW_Cave.png');
    } else if (dive_type === 'Reef') {
      return diveMarkerIcon('/reef-marker-s.png');
    } else {
      // Default icon if dive_type doesn't match any of the above
      return Icon.Default.prototype; // Or another default icon
    }
  };

export {diveTypeIcon};
