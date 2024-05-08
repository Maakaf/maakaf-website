import { addNewProject } from '@/actions/addNewProject';
import { IAddProjectForm } from '@/types/forms';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { z } from 'zod';
import { FormTextInput } from '../../Inputs/FormTextInput';
import { FileUploader } from './FileUploader';
import { MustIncludeMessage } from './MustIncludeMessage';
import { ProjectDescription } from './ProjectDescription';
import { TermsAndConditions } from './TermsAndConditions ';
import useTextDirection from '@/hooks/useTextDirection';

interface ModalContentProps {
  closeModal: () => void;
}

export const ModalContent = ({ closeModal }: ModalContentProps) => {
  const t = useTranslations('Maintainers.maintainerForm');
  const direction = useTextDirection();

  const schema = z.object({
    fullName: z.string().min(2, t('fullNameError')),
    email: z.string().email(t('wrongMailError')).min(1),
    projectName: z.string().min(1, t('projectNameError')),
    projectDescription: z.string(),
    repoLink: z.string().optional(),
    file: z
      .custom<FileList>()
      .superRefine((fileList, ctx) => {
        const file = fileList?.item(0);
        if (!file) {
          return;
        }
        if (file.type !== 'image/png' && file.type !== 'image/jpeg') {
          ctx.addIssue({
            code: 'custom',
            message: t('fileTypeError'),
          });
        }
        if (file.size > 2000000) {
          ctx.addIssue({
            code: 'custom',
            message: t('fileSizeError'),
          });
        }
      })
      .optional(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Record<string, unknown>> = async data => {
    var form_data = new FormData();

    for (var key in data) {
      form_data.append(key, (data[key] as string));
    }

    await addNewProject(form_data);
    closeModal();
  };

  return (
    <form
      dir={direction}
      onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
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

        <FileUploader
          register={register}
          name={'file'}
          errors={errors}
          onFileChange={setValue}
        />
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
