import React, { useState } from 'react';
import { Marker } from 'react-leaflet';
import { LeafletEvent } from 'leaflet';
import { LatLng, PathPoint } from '../../types/types';
import { droneIcon, locationIcon } from 'app/icons';

const MapMarkers = ({
  currentPosition,
  setCurrentPosition,
  setProgressPath,
  progressPath,
  path,
}: {
  currentPosition: LatLng | null;
  setCurrentPosition: (val: LatLng | null) => void;
  setProgressPath: (val: LatLng[]) => void;
  progressPath: LatLng[];
  path: PathPoint[];
}) => {
  const [hasBeenDragged, setHasBeenDragged] = useState(false); // Track if the drone has been dragged

  const handleDragEnd = (event: LeafletEvent) => {
    const marker = event.target;
    const newPosition: LatLng = marker.getLatLng();
    setCurrentPosition(newPosition);
    setProgressPath([...progressPath, newPosition]);
    setHasBeenDragged(true); // Mark as dragged
  };
  return (
    <>
      {currentPosition && (
        <Marker
          position={currentPosition}
          icon={droneIcon}
          draggable={true} // Enable dragging
          eventHandlers={{
            dragend: handleDragEnd, // Handle drag end event
          }}
        />
      )}

      {currentPosition && (path.length > 1 || hasBeenDragged) && (
        <Marker position={path[0]} icon={locationIcon}
        
        />
      )}
    </>
  );
};

export default MapMarkers;
