import { FormFieldRegistration } from '@/types/forms';
import React from 'react';
import { useTranslations } from 'next-intl';

interface ProjectDescriptionProps extends FormFieldRegistration {
  name: string;
}

export const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  register,
  name,
  errors,
}) => {
  const t = useTranslations('Maintainers.maintainerForm');

  return (
    <div className="w-[100%]">
      <p className="text-xl font-bold mb-4 mt-4 text-right">
        {t('projectDescription')}
      </p>
      <input
        type="text"
        {...register(name, { required: true })}
        className="h-56 dark:bg-gray-700 bg-gray-200 w-[100%] rounded-md"
        placeholder={t('freeText')}
      />
      {errors?.[name] && <p className="text-red-500 text-sm">{'Error'}</p>}
    </div>
  );
};
