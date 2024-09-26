import React from 'react';

const SimulationControls = ({
  isPaused,
  onStartSimulation,
  onPauseResume,
  onReset,
}: {
  isPaused: boolean;
  simulationStarted: boolean;
  isPathUnchanged: boolean;
  onStartSimulation: () => void;
  onPauseResume: () => void;
  onReset: () => void;
}) => {
  return (
    <div className='flex flex-col items-center gap-4'>
      {/* Show the Simulate button only if the path is not unchanged */}
      {/*{!isPathUnchanged && !simulationStarted && (*/}
      <button
        onClick={onStartSimulation}
        className='bg-[#33bf99] my-2 px-4 py-2 w-fit text-base font-light rounded-md text-gray-200'
      >
        Simulate
      </button>
      {/*)}*/}

      {/* Show buttons based on simulation state */}
      {true && (
        <div className='flex flex-row gap-3'>
          <button
            onClick={onPauseResume}
            className='bg-[#FF5841] my-2 px-4 py-2 w-fit text-base font-light rounded-md text-gray-200'
          >
            {isPaused ? 'Resume' : 'Pause'}
          </button>
          <button
            onClick={onReset}
            className='bg-[#FF5841] my-2 px-4 py-2 w-fit text-base font-light rounded-md text-gray-200'
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default SimulationControls;
