import { FormFieldRegistration } from '@/types/forms';
import React from 'react';

interface ProjectDescriptionProps extends FormFieldRegistration {
  name: string;
}

export const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  register,
  name,
  errors,
}) => {
  return (
    <div className="w-[100%]">
      <p className="text-xl font-bold mb-4 mt-4 text-right">תיאור פרוייקט</p>
      <input
        type="text"
        {...register(name, { required: true })}
        className="h-56 dark:bg-gray-700 bg-gray-200 w-[100%] rounded-md"
        placeholder="טקסט חופשי"
      />
      {errors?.[name] && <p className="text-red-500 text-sm">{'Error'}</p>}
    </div>
  );
};
