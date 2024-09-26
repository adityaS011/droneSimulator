import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapWithDrone from './MapWithDrone';
import { PathPoint } from '../../types/types';

const MapController = ({
  path,
  isPaused,
}: {
  path: PathPoint[];
  isPaused: boolean;
}) => {
  return (
    <div>
      <MapContainer
        center={
          path.length > 0 ? [path[0].lat, path[0].lng] : [28.6279, 77.216]
        } // Default to the first point or a fallback position
        zoom={13}
        style={{ height: '100vh', width: '100%' }}
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <MapWithDrone path={path} isPaused={isPaused} />
      </MapContainer>
    </div>
  );
};

export default MapController;
