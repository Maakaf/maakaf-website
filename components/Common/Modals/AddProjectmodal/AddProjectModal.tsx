import React, { useTransition } from 'react';
import Modal from '../Modal';
import { z } from 'zod';
import { FormTextInput } from '../../Inputs/FormTextInput';
import { FileUploader } from './FileUploader';
import { ProjectDescription } from './ProjectDescription';
import { TermsAndConditions } from './TermsAndConditions ';
import { MustIncludeMessage } from './MustIncludeMessage';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';

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

interface ModalContentProps {
  closeModal: () => void;
}

const ModalContent = ({ closeModal }: ModalContentProps) => {
  const t = useTranslations('maintainers.maintainerForm');

  const schema = z.object({
    fullName: z.string().min(2, t('fullNameError')),
    email: z.string().email(t('wrongMailError')).min(1),
    projectName: z.string().min(1, t('projectNameError')),
    projectDescription: z.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = data => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 mt-24 dark:bg-[#0F1729] bg-gray-100 dark:text-white  text-black rounded-[12px]"
    >
      <div className="flex justify-between mb-4">
        <p className="text-xl font-bold text-right items-center">
          {t('requestAddProject')}
        </p>
        <button onClick={closeModal}>X</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4 max-w-[1100px] flex-wrap">
        <FormTextInput
          placeholder={t('fullName')}
          register={register}
          errors={errors}
          name={'fullName'}
        />
        <FormTextInput
          placeholder={t('email')}
          register={register}
          errors={errors}
          name={'email'}
        />

        <FormTextInput
          placeholder={t('repoLink')}
          register={register}
          errors={errors}
          name={'repoLink'}
        />

        <FormTextInput
          placeholder={t('projectDescription')}
          register={register}
          errors={errors}
          name={'projectName'}
        />

        <FileUploader register={register} name={'fileUploader'} />
      </div>

      <ProjectDescription
        register={register}
        name={'projectDescription'}
        errors={errors}
      />

      <MustIncludeMessage />
      <TermsAndConditions closeModal={closeModal} />

      <button
        type="submit"
        className="w-48 h-7 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        {t('send')}
      </button>
    </form>
  );
};
