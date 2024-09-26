import React from 'react';

const SimulationControls = ({
  isPaused,
  onPauseResume,
  onReset,
}: {
  isPaused: boolean;
  onPauseResume: () => void;
  onReset: () => void;
}) => {
  return (
    <div className='flex flex-col items-center gap-4'>
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
