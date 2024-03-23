import React from 'react';
import { FieldErrors } from 'react-hook-form';
import { UseFormRegister, FieldValues } from 'react-hook-form';

type FormTextInputProps = {
  placeholder: string;
  errors: FieldErrors;
  name: string;
  register: UseFormRegister<FieldValues>;
};

export const FormTextInput: React.FC<FormTextInputProps> = ({
  placeholder,
  errors,
  name,
  register,
}) => {
  return (
    <div>
      <input
        {...register(name, { required: true })}
        name={name}
        className={`mw-[462px] w-[100%] mx-auto h-14 p-2 block rounded-md focus:outline-non dark:bg-gray-700 bg-gray-200 ${
          errors[name] && 'border-red-500'
        }`}
        type="text"
        placeholder={placeholder}
      />
      {errors[name] && <p className="text-red-500 text-sm">{'Error'}</p>}
    </div>
  );
};
