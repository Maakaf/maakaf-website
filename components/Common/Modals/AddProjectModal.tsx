import React, { useState } from 'react';
import Modal from './Modal';
import { z, ZodError  } from "zod";

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
  projectName: z.string().min(4),
  email: z.string().email(),
});

type FormErrors = {
  projectName?: string;
  email?: string;
};

const ModalContent = () => {
  const [projectName, setProjectName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});

  const handleNameChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

const handleSubmit = () => {
  try {
    schema.parse({ projectName, email });
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
    <div className='bg-gray-600 dark:bg-gray-300 p-4'>
      <p className="text-xl font-bold mb-4 text-right">בקשה להוספת פרויקט</p>
      <div className="mb-4">
        <input
          type="text"
          placeholder='שם הפרוייקט'
          className={`mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${errors['projectName'] && 'border-red-500'}`}
          value={projectName}
          onChange={handleNameChange}
        />
        {errors["projectName"] && <p className="text-red-500 text-sm">{errors['projectName']}</p>}
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder='מייל'
          className={`mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${errors['email'] && 'border-red-500'}`}
          value={email}
          onChange={handleEmailChange}
        />
        {errors['email'] && <p className="text-red-500 text-sm">{errors['email']}</p>}
      </div>
      <button
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        onClick={handleSubmit}
      >
        שליחה
      </button>
    </div>
  );
};
