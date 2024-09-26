import L from 'leaflet';

export const droneIcon = new L.Icon({
  iconUrl: '/drone_icon.png',
  iconSize: [35, 50],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

export const locationIcon = new L.Icon({
  iconUrl: '/past_locationIcon.png',
  iconSize: [28, 32],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});
