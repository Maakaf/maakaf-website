import React from 'react';

type FormTextInputProps = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

const FormTextInput: React.FC<FormTextInputProps> = ({ placeholder, value, onChange, error }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder={placeholder}
        className={`mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${error && 'border-red-500'}`}
        value={value}
        onChange={onChange}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default FormTextInput;
