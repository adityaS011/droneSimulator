import { Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState, useRef } from 'react';
import MapMarkers from './MapMarkers';
import { LatLng, PathPoint } from '../../types/types';

const MapWithDrone = ({
  path,
  isPaused,
}: {
  path: PathPoint[];
  isPaused: boolean;
}) => {
  const [currentPosition, setCurrentPosition] = useState<LatLng | null>(null);
  const [progressPath, setProgressPath] = useState<LatLng[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const map = useMap();

  useEffect(() => {
    let index = 0;

    if (path.length > 0) {
      setCurrentPosition({ lat: path[0].lat, lng: path[0].lng });
      setProgressPath([]);
      map.setView([path[0].lat, path[0].lng], map.getZoom());
    }

    const updatePosition = () => {
      if (index < path.length) {
        const { lat, lng, time } = path[index];
        setCurrentPosition({ lat, lng });
        setProgressPath((prev) => [...prev, { lat, lng }]);
        map.setView([lat, lng], 16); // Center map on the current position
        index++;
        intervalRef.current = setTimeout(updatePosition, time);
      } else {
        clearTimeout(intervalRef.current!);
      }
    };

    if (!isPaused && path.length > 0) {
      updatePosition();
    }

    return () => {
      clearTimeout(intervalRef.current!);
    };
  }, [path, isPaused, map]);

  return (
    <>
      {/* Light black line showing the entire path */}
      <Polyline
        positions={path.map(({ lat, lng }) => [lat, lng])}
        color='black'
        opacity={0.3}
      />

      {/* Path drone has traversed */}
      <Polyline positions={progressPath} color='blue' />

      <MapMarkers
        currentPosition={currentPosition}
        setCurrentPosition={setCurrentPosition}
        setProgressPath={setProgressPath}
        progressPath={progressPath}
        path={path}
      />
    </>
  );
};

export default MapWithDrone;
