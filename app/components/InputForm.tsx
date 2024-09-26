'use client';
import { useState } from 'react';
import { PathPoint } from '../types/types';

const InputForm = ({
  onSubmit,
  showFakeApiCallLoading,
}: {
  showFakeApiCallLoading: () => void;
  onSubmit: (value: PathPoint[]) => void;
}) => {
  const [latLngs, setLatLngs] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showFakeApiCallLoading();
    setError('');
    const lines = latLngs.split('\n');
    const path: PathPoint[] = [];

    for (const line of lines) {
      const parts = line.split(',').map((part) => part.trim());

      if (parts.length !== 3) {
        setError(
          'Each line must contain exactly three values: latitude, longitude, and time (in seconds). Example: 26.8467,80.9462,2000'
        );
        return;
      }

      const [lat, lng, time] = parts;

      const latitude = parseFloat(lat);
      if (isNaN(latitude) || latitude < -90 || latitude > 90) {
        setError(
          `Invalid latitude value: ${lat}. It must be between -90 and 90.`
        );
        return;
      }

      const longitude = parseFloat(lng);
      if (isNaN(longitude) || longitude < -180 || longitude > 180) {
        setError(
          `Invalid longitude value: ${lng}. It must be between -180 and 180.`
        );
        return;
      }

      const duration = parseInt(time);
      if (isNaN(duration) || duration <= 0) {
        setError(`Invalid time value: ${time}. It must be a positive integer.`);
        return;
      }

      path.push({ lat: latitude, lng: longitude, time: duration });
    }

    onSubmit(path);
    setLatLngs('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-2 rounded-lg items-center'
    >
      <textarea
        className='bg-slate-200 text-gray-800 p-4 w-[300px] h-32 focus:outline-slate-200 flex flex-row rounded-lg placeholder:text-gray-400'
        value={latLngs}
        onChange={(e) => setLatLngs(e.target.value)}
        placeholder='Enter lat lng time pairs separated by new lines'
      />
      {error && <p className='text-red-600 w-[300px] p-4'>{error}</p>}{' '}
      <button
        type='submit'
        className='bg-[#33bf99] my-2 px-4 py-2 w-fit text-base font-light rounded-md text-white'
      >
        Simulate
      </button>
    </form>
  );
};

export default InputForm;
