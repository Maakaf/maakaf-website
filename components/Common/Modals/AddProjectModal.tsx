import React, { useState } from 'react';
import Modal from './Modal';
import { z, ZodError } from "zod";
import FormTextInput from '../Inputs/FormTextInput';

export const AddProjectModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
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

const ModalContent = ({closeModal} : ModalContentProps) => {
    type FormErrors = {
        name? : string
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

  const handleSubmit = () => {
    try {
      schema.parse({ name, projectName, email });
      setErrors({}); 
      //TODO Add logic behind this later
      console.log({name, projectName,projectDescription, repoLink, email});
      
    } catch (error: any) {
      if (error instanceof ZodError) {
        const parsedErrors = {};
        
        for (const { path, message } of error.errors) {
        parsedErrors[path[0]] = message;
        }
        setErrors(parsedErrors);
      }
    }
  };

  return (
    <div className="bg-gray-600 dark:bg-gray-300">
      <p className="text-xl font-bold mb-4 text-right">בקשה להוספת פרויקט</p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        </div>

      <div className="flex flex-col">
        <p className="text-xl font-bold mb-4 text-right">תיאור פרוייקט</p>
        <textarea
          placeholder="טקסט חופשי"
          value={projectDescription}
          onChange={handleProjectDescriptionChange}
        />

        <div className="flex justify-center flex-wrap">
          <input type='checkbox'/>
          <p>קראתי ואני מסכים לתנאי השימוש באתר</p>
          <p> קראתי ואני מסכימ/ה<span className='underline'>לתנאי השימוש והצהרת הפרטיות *</span></p>
          <button onClick={closeModal}>ביטול</button>
          <button
            className="w-48 h-7 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            onClick={handleSubmit}
          >
            שליחה
          </button>
        </div>
      </div>
    </div>
  );
};