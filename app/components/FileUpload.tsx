'use client';
import React, { useState } from 'react';

const FileUpload: React.FC<{
  onUpload: (newPath: { lat: number; lng: number; time: number }[]) => void;
  uploadedFiles: File[];
  setUploadedFiles: (val: File[]) => void;
}> = ({ onUpload, uploadedFiles, setUploadedFiles }) => {
  const [error, setError] = useState<string>('');

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

        setError(''); // Clear any previous error
        onUpload(path); // Pass the parsed path to onUpload
      };

      reader.readAsText(file);
    };

    files.forEach(readFile); // Read each file
  };

  return (
    <div className='flex flex-col font-sans items-center bg-[#4A8BDF] rounded-lg p-2 gap-3 w-fit'>
      <p className='text-slate-800  font-semibold'>Upload CSV files</p>
      <div className='px-2'>
        <input type='file' accept='.csv' multiple onChange={handleFileChange} />
      </div>
      {error && <p className='text-red-500 w-[300px] p-4'>{error}</p>}
      <div className='mt-4'>
        <h4 className='text-slate-800'>Uploaded Files:</h4>
        <ul className='text-slate-800'>
          {uploadedFiles.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FileUpload;
