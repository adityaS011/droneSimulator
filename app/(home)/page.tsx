'use client';
import React, { useEffect, useState } from 'react';
import PathUploader from '../components/PathUploader';
import BouncingLoader from '../components/Loaders/BouncingLoader';
import { PathPoint } from '../types/types';
import SimulationControls from '../components/SimulationControls';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const MapController = dynamic(
  () => import('../components/MapComponents/MapController'),
  { ssr: false }
);

const Home = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const initialPath: PathPoint = { lat: 28.6279, lng: 77.216, time: 2000 };
  const [path, setPath] = useState<PathPoint[]>([initialPath]);
  const [simulationStarted, setSimulationStarted] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  useEffect(() => {
    showFakeApiCallLoading();
  }, []);

  const showFakeApiCallLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const startSimulation = () => {
    console.log(path);
    if (path.length > 0) {
      setSimulationStarted(true);
    }
  };

  const handleUpload = (newPath: PathPoint[]) => {
    setPath((prevPath) => [...prevPath, ...newPath]);
  };

  const resetSimulation = () => {
    setPath([initialPath]); // Reset path to initial state
    setSimulationStarted(false); // End simulation
    setIsPaused(false); // Ensure the simulation is not paused
  };

  const isPathUnchanged =
    path.length === 1 &&
    path[0].lat === initialPath.lat &&
    path[0].lng === initialPath.lng;

  return (
    <div className='w-full h-screen flex flex-row'>
      <div className='w-[400px] flex flex-col gap-6 h-full items-center p-4 border-r border-gray-200 bg-gradient-to-t from-[#e8e8e8] to-green-50 pt-10'>
        <div className='text-xl font-semibold text-gray-800 uppercase flex flex-col items-center'>
          <Image
            src={'/drone_logo.png'}
            alt={'logo'}
            width={200}
            height={100}
          />
          <div>Drone Motion Simulator</div>
        </div>

        <PathUploader
          onPathChange={handleUpload}
          currentPath={path}
          uploadedFiles={uploadedFiles}
          setUploadedFiles={setUploadedFiles}
          showFakeApiCallLoading={showFakeApiCallLoading}
        />

        <SimulationControls
          isPaused={isPaused}
          simulationStarted={simulationStarted}
          isPathUnchanged={isPathUnchanged}
          onStartSimulation={startSimulation}
          onPauseResume={() => setIsPaused(!isPaused)}
          onReset={resetSimulation}
        />
      </div>

      {isLoading ? (
        <BouncingLoader />
      ) : (
        <div className='w-full'>
          {path.length > 0 && <MapController path={path} isPaused={isPaused} />}
        </div>
      )}
    </div>
  );
};

export default Home;
