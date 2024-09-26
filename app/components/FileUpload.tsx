'use client';
import React, { useState } from 'react';

const FileUpload = ({
  onUpload,
  uploadedFiles,
  setUploadedFiles,
  showFakeApiCallLoading,
}: {
  onUpload: (newPath: { lat: number; lng: number; time: number }[]) => void;
  uploadedFiles: File[];
  setUploadedFiles: (val: File[]) => void;
  showFakeApiCallLoading: () => void;
}) => {
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const [parsedPath, setParsedPath] = useState<
    { lat: number; lng: number; time: number }[]
  >([]); // Store parsed path

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFiles = Array.from(files);
      setUploadedFiles([...uploadedFiles, ...newFiles]); // Store uploaded files
      parseFiles(newFiles);
    }
  };

  const parseFiles = (files: File[]) => {
    const path: { lat: number; lng: number; time: number }[] = [];

    const readFile = (file: File) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        const lines = text.split('\n').filter((line) => line.trim() !== '');

        for (const line of lines) {
          const [lat, lng, time] = line.split(',').map((val) => val.trim());

          if (!lat || !lng || !time) {
            setError('Each line must contain latitude, longitude, and time.');
            return;
          }

          const latitude = parseFloat(lat);
          const longitude = parseFloat(lng);
          const duration = parseInt(time, 10);

          if (isNaN(latitude) || latitude < -90 || latitude > 90) {
            setError(
              `Invalid latitude value: ${lat}. Must be between -90 and 90.`
            );
            return;
          }

          if (isNaN(longitude) || longitude < -180 || longitude > 180) {
            setError(
              `Invalid longitude value: ${lng}. Must be between -180 and 180.`
            );
            return;
          }

          if (isNaN(duration) || duration <= 0) {
            setError(
              `Invalid time value: ${time}. Must be a positive integer.`
            );
            return;
          }

          path.push({ lat: latitude, lng: longitude, time: duration });
        }
        setParsedPath(path); // Store parsed path in state
        setError(''); // Clear any previous error
      };

      reader.readAsText(file);
    };

    files.forEach(readFile); // Read each file
  };
  const handleSimulate = async () => {
    showFakeApiCallLoading();

    setIsLoading(true);
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    setIsLoading(false);

    if (parsedPath.length > 0) {
      onUpload(parsedPath);
    } else {
      setError('No valid path to simulate.'); // Handle case where no valid path was parsed
    }
  };
  return (
    <div className='flex flex-col font-sans items-center bg-[#4f3194] rounded-lg p-2 gap-3 w-fit'>
      <p className='text-slate-200  font-semibold'>Upload CSV files</p>
      <div className='px-2'>
        <input type='file' accept='.csv' multiple onChange={handleFileChange} />
        {error && (
          <p className='text-red-500 w-[300px] mt-2 font-medium text-xs bg-slate-300 p-2 rounded-lg border border-red-700'>
            {error}
          </p>
        )}{' '}
      </div>
      <div className=' flex flex-col w-full px-4'>
        <div className='flex flex-row justify-between items-center w-full '>
          <h4 className='text-slate-200'>Uploaded Files:</h4>
          <button
            onClick={handleSimulate}
            className='bg-[#30bc97]  px-4 py-2 w-fit text-base  rounded-md text-white font-normal'
          >
            {isLoading ? <p>Loading...</p> : <p> Simulate</p>}
          </button>
        </div>
        <ul className='text-slate-800'>
          {uploadedFiles.map((file, index) => (
            <li key={index} className='text-slate-300'>
              {file.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FileUpload;
