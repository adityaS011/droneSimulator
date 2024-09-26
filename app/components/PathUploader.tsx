// PathUploader.tsx
import React from 'react';
import InputForm from './InputForm';
import FileUpload from './FileUpload';
import { PathPoint } from 'app/types/types';

const PathUploader = ({
  onPathChange,
  uploadedFiles,
  setUploadedFiles,
  showFakeApiCallLoading,
}: {
  onPathChange: (path: PathPoint[]) => void;
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
        showFakeApiCallLoading={showFakeApiCallLoading}
        onUpload={onPathChange}
        uploadedFiles={uploadedFiles}
        setUploadedFiles={setUploadedFiles}
      />
    </div>
  );
};

export default PathUploader;
