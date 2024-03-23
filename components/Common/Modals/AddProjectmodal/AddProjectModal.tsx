import React, { useState } from 'react';
import Modal from '../Modal';
import { z, ZodError } from 'zod';
import { FormTextInput } from '../../Inputs/FormTextInput';
import { FileUploader } from './FileUploader';
import { ProjectDescription } from './ProjectDescription';
import { TermsAndConditions } from './TermsAndConditions';
import { MustIncludeMessage } from './MustIncludeMessage';
import { useForm, SubmitHandler } from 'react-hook-form';

interface AddProjectModalProps<T> {
  isOpen: boolean;
  closeModal: () => void;
  translations: T;
}

export const AddProjectModal = <T,>({
  isOpen,
  closeModal,
}: AddProjectModalProps<T>) => {
  return (
    <div className="w-4/5">
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <ModalContent closeModal={closeModal} />
      </Modal>
    </div>
  );
};
const schema = z.object({
  name: z.string().min(2),
  projectName: z.string().min(4),
  email: z.string().email(),
});

interface ModalContentProps {
  closeModal: any;
}

const ModalContent = ({ closeModal }: ModalContentProps) => {
  type FormErrors = {
    name?: string;
    projectName?: string;
    email?: string;
  };

  const onSubmit = data => console.log(data);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFileChange = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // setProjectIcon(reader.result as string);
    };
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 mt-24 dark:bg-[#0F1729] bg-gray-100 dark:text-white  text-black rounded-[12px]"
    >
      <div className="flex justify-between mb-4">
        <p className="text-xl font-bold text-right items-center">
          בקשה להוספת פרויקט
        </p>
        <button onClick={closeModal}>X</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4 max-w-[1100px] flex-wrap">
        <FormTextInput
          placeholder="שם מלא *"
          register={register}
          errors={errors}
          name={'fullName'}
        />

        <FormTextInput
          placeholder="אימייל ליצירת קשר *"
          register={register}
          errors={errors}
          name={'email'}
        />

        <FormTextInput
          placeholder="קישור לריפו"
          register={register}
          errors={errors}
          name={'repoLink'}
        />

        <FormTextInput
          placeholder="שם הפרוייקט *"
          register={register}
          errors={errors}
          name={'projectName'}
        />

        <FileUploader
          register={register}
          name={'fileUploader'}
          onChange={handleFileChange}
        />
      </div>

      {/* <ProjectDescription
        projectDescription={projectDescription}
        handleProjectDescriptionChange={handleProjectDescriptionChange}
      /> */}
      {/* <TermsAndConditions closeModal={closeModal} handleSubmit={onSubmit} /> */}
      {/* <MustIncludeMessage /> */}

      <button
        type="submit"
        className="w-48 h-7 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        שליחה
      </button>
    </form>
  );
};
