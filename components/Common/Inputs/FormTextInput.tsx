import React from 'react';

type FormTextInputProps = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

export const FormTextInput: React.FC<FormTextInputProps> = ({ placeholder, value, onChange, error }) => {
  return (
    <div>
      <input
        className={`mw-[462px] w-[100%] mx-auto h-14 p-2 block rounded-md focus:outline-non dark:bg-gray-700 bg-gray-200 ${error && 'border-red-500'}`}
        type="text" 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

