import React, { useState } from 'react';
import { UploadIcon } from './UploadIcon';
import { UseFormRegister, FieldValues, UseFormSetValue } from 'react-hook-form';
import { FormFieldRegistration } from '@/types/forms';
import { useTranslations } from 'next-intl';

const getErrorMessage = (errors: any, name: string) => {
  return errors?.[name]?.message || '';
};

interface FileUploaderProps extends FormFieldRegistration {
  register: UseFormRegister<FieldValues>;
  name: string;
  onFileChange?: UseFormSetValue<FieldValues>;
  errors?: FieldValues;
}

export const FileUploader: React.FC<FileUploaderProps> = ({
  register,
  name,
  onFileChange,
  errors,
}) => {
  const [fileName, setFileName] = useState('');
  const t = useTranslations('Maintainers.maintainerForm');``
  const errorMessage = getErrorMessage(errors, name);
  const formProps = register(name, { required: false });
  return (
    <div>
      <div className="flex flex-row gap-4 items-center">
        <p className="whitespace-nowrap">{t('logo')}</p>
        <div className="flex items-center dark:bg-gray-700 bg-gray-200 rounded-md m-auto justify-center flex-1">
          <label htmlFor="file-input" className="cursor-pointer">
            <input
              {...formProps}
              id="file-input"
              type="file"
              name={name}
              accept="image/*"
              className="hidden"
              onChange={e => {
                setFileName(e.target.files?.item(0)?.name || '');
                formProps.onChange(e);
              }}
            />
            <div className="flex justify-between items-center h-14 rounded-md w-[150px] gap-2">
              {fileName ? (
                <SelectedFile
                  fileName={fileName}
                  onCancel={() => {
                    setFileName('');
                    onFileChange &&
                      onFileChange(name, null, { shouldValidate: true });
                  }}
                  name={name}
                  errors={errors}
                />
              ) : (
                <div className="w-[26px] h-[26px] mx-auto">
                  <UploadIcon />
                </div>
              )}
            </div>
          </label>
        </div>
      </div>
      {errorMessage && <p className="text-error">{errorMessage}</p>}
    </div>
  );
};

interface ISelectedFiled {
  fileName: string;
  onCancel: () => void;
  name: string;
  errors?: FieldValues;
}
const SelectedFile = ({ fileName, onCancel, errors, name }: ISelectedFiled) => {
  const fileParts = fileName.split('.');
  const extention = fileParts.slice(-1)[0];
  const base =
    fileParts.length < 1 ? fileParts : fileParts.slice(0, -1).join('.');
  const errorMessage = getErrorMessage(errors, name);
  return (
    <>
      <span
        className=""
        onClick={e => {
          e.preventDefault();
          onCancel();
        }}
      >
        X
      </span>
      <div
        className="file-name flex min-w-0 justify-start"
        style={{ direction: 'ltr' }}
      >
        <span className="overflow-hidden whitespace-nowrap text-ellipsis">
          {base}
        </span>
        <span>.{extention}</span>
      </div>
    </>
  );
};
