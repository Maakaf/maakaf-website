import React, { useState } from 'react';
import Modal from '../Modal';
import { z, ZodError } from "zod";
import { FormTextInput } from '../../Inputs/FormTextInput';
import { FileUploader } from './FileUploader';
import { ProjectDescription } from './ProjectDescription';
import { TermsAndConditions } from './TermsAndConditions';
import { MustIncludeMessage } from './MustIncludeMessage';

export const AddProjectModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='w-4/5'>
      <Modal isOpen={isModalOpen} modalContent={<ModalContent closeModal={() => setIsModalOpen(false)} />} />
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
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

  const [projectName, setProjectName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [repoLink, setRepoLink] = useState('');
  const [projectIcon, setProjectIcon] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleProjectNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleRepoLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepoLink(e.target.value);
  };

  const handleProjectDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectDescription(e.target.value);
  };

  const handleFileChange = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setProjectIcon(reader.result as string);
    };
  };

  const handleSubmit = () => {
    try {
      schema.parse({ name, projectName, email });
      setErrors({});
      //TODO Add logic behind this later
      console.log({ name, projectName, projectDescription, repoLink, email, projectIcon });
    } catch (error: any) {
      if (error instanceof ZodError) {
        const parsedErrors = {};

        for (const { path , message } of error.errors) {
          parsedErrors[path[0]] = message;
        }
        setErrors(parsedErrors);
      }
    }
  };

  return (
    <div className="p-4 mt-24 bg-[#0F1729] text-white dark:bg-gray-100 dark:text-black">
      <p className="text-xl font-bold mb-4 text-right">בקשה להוספת פרויקט</p>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4 max-w-[1100px] flex-wrap">
        <FormTextInput
          placeholder="שם מלא *"
          value={name}
          onChange={handleNameChange}
          error={errors.name}
        />
        <FormTextInput
          placeholder="אימייל ליצירת קשר *"
          value={email}
          onChange={handleEmailChange}
          error={errors.email}
        />
        <FormTextInput
          placeholder="קישור לריפו"
          value={repoLink}
          onChange={handleRepoLinkChange}
        />
        <FormTextInput
          placeholder="שם הפרוייקט *"
          value={projectName}
          onChange={handleProjectNameChange}
          error={errors.projectName}
        />

        <FileUploader onChange={handleFileChange} />

      </div>

      <ProjectDescription projectDescription={projectDescription} handleProjectDescriptionChange={handleProjectDescriptionChange} />
      <TermsAndConditions closeModal={closeModal} handleSubmit={handleSubmit} />
      <MustIncludeMessage />
    </div>
  );
};
