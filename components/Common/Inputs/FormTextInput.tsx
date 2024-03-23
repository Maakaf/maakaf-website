import { FormFieldRegistration } from '@/types/forms';
import React from 'react';

interface FormTextInputProps extends FormFieldRegistration {
  placeholder: string;
  name: string;
}

const getErrorMessage = (errors: any, name: string) => {
  return errors?.[name]?.message || '';
};

export const FormTextInput: React.FC<FormTextInputProps> = ({
  placeholder,
  errors,
  name,
  register,
}) => {
  const errorMessage = getErrorMessage(errors, name);
  return (
    <div>
      <input
        {...register(name, { required: true })}
        name={name}
        className={`mw-[462px] w-[100%] mx-auto h-14 p-2 block rounded-md focus:outline-non dark:bg-gray-700 bg-gray-200 ${
          errorMessage && 'border-red-500'
        }`}
        type="text"
        placeholder={placeholder}
      />
      {errorMessage && <p className="text-error">{errorMessage}</p>}
    </div>
  );
};
