export interface PathPoint {
  lat: number;
  lng: number;
  time: number;
}

export interface LatLng {
  lat: number;
  lng: number;
}

export interface PathPoint {
  lat: number;
  lng: number;
  time: number; // Time in milliseconds to wait before moving to the next point
}

export interface DroneMapProps {
  path: PathPoint[];
}
