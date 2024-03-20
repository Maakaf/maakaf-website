import React, { useState } from 'react';
import Modal from './Modal';
import { z, ZodError  } from "zod";
import FormTextInput from '../Inputs/FormTextInput';

export const AddProjectModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} modalContent={<ModalContent />} />
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
    </div>
  );
};


const schema = z.object({
  name: z.string().min(2),
  projectName: z.string().min(4),
  email: z.string().email(),
});

type FormErrors = {
  name? : string
  projectName?: string;
  email?: string;
};

const ModalContent = () => {
  const [projectName, setProjectName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [repoLink, setRepoLink] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleProjectNameChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

    const handleRepoLinkChange = (e) => {
    setRepoLink(e.target.value);
  };

const handleSubmit = () => {
  try {
    schema.parse({ name,projectName, email });
    setErrors({}); 

  } catch (error: any) {
    if (error instanceof ZodError) {

      const parsedErrors = {};
      for (const err of error.errors) {
        parsedErrors[err.path[0]] = err.message;
      }
      setErrors(parsedErrors);
    }

  }
};

   return (
    <div className="bg-gray-600 dark:bg-gray-300 p-4">
      <p className="text-xl font-bold mb-4 text-right">בקשה להוספת פרויקט</p>

      <FormTextInput
        placeholder="שם"
        value={name}
        onChange={handleNameChange}
        error={errors.name}
      />

      <FormTextInput
        placeholder="שם הפרוייקט"
        value={projectName}
        onChange={handleProjectNameChange}
        error={errors.projectName}
      />

      <FormTextInput
        placeholder="מייל"
        value={email}
        onChange={handleEmailChange}
        error={errors.email}
      />

      <FormTextInput
        placeholder="קישור לריפו"
        value={repoLink}
        onChange={handleRepoLinkChange}
      />

      <button
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        onClick={handleSubmit}
      >
        שליחה
      </button>
    </div>
  );
};