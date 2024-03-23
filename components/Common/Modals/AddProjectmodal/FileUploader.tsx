import React from 'react';
import { UploadIcon } from './UploadIcon';
import { UseFormRegister, FieldValues } from 'react-hook-form';

interface FileUploaderProps {
  onChange: (file: File) => void;
  register: UseFormRegister<FieldValues>;
  name: string;
}

export const FileUploader: React.FC<FileUploaderProps> = ({
  onChange,
  register,
  name,
}) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onChange(file);
    }
  };

  return (
    <div className="flex flex-row items-center">
      <p className="text-2xl whitespace-nowrap">לוגו (אם יש)</p>
      <div className="ml-4 flex items-center dark:bg-gray-700 bg-gray-200 rounded-md m-auto">
        <label htmlFor="file-input" className="cursor-pointer">
          <input
            {...register(name, { required: false })}
            id="file-input"
            type="file"
            name={name}
            className="hidden"
            onChange={handleFileChange}
          />
          <div className="flex justify-center items-center rounded-md max-w-[150px]">
            <UploadIcon />
          </div>
        </label>
      </div>
    </div>
  );
};
