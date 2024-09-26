import React from 'react';
import FileUpload from './FileUpload';
import { PathPoint } from '../types/types';
import InputForm from './InputForm';

const PathUploader = ({
  onPathChange,
  uploadedFiles,
  setUploadedFiles,
  showFakeApiCallLoading,
}: {
  onPathChange: (path: PathPoint[]) => void;
  currentPath: PathPoint[];
  uploadedFiles: File[];
  setUploadedFiles: (files: File[]) => void;
  showFakeApiCallLoading: () => void;
}) => {
  return (
    <div className='flex flex-col gap-6'>
      <InputForm
        showFakeApiCallLoading={showFakeApiCallLoading}
        onSubmit={onPathChange}
      />
      <FileUpload
        onUpload={onPathChange}
        uploadedFiles={uploadedFiles}
        setUploadedFiles={setUploadedFiles}
      />
    </div>
  );
};

export default PathUploader;
