import React, { useState } from 'react';
import Modal from './Modal';
import { FormInput } from '../Inputs/FormInput';

export const AddProjectModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} modalContent={<ModalContent />} />
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
    </div>
  );
};


const ModalContent = () => {
  const [projectName, setProjectName] = useState('');
  const [email, setEmail] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const handleNameChange = (e) => {
    setProjectName(e.target.value);
  };

    const handlEmailChange = (e) => {
    setEmail(e.target.value);
  };


  const handleDescriptionChange = (e) => {
    setProjectDescription(e.target.value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleSubmit = () => {
    // Perform submit logic here
    console.log({projectName,email,projectDescription,imageFile})
  };

  return (
    <div className='bg-gray-600 dark:bg-gray-300 p-4'>
      <p className="text-xl font-bold mb-4 text-right">בקשה להוספת פרויקט</p>
        <input
          type="text"
          placeholder='שם הפרוייקט'
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={projectName}
          onChange={handleNameChange}
        />

        <input
          type="text"
          placeholder='מייל'
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={email}
          onChange={handlEmailChange}
        />
      <div className="mb-4">
        <textarea
          id="projectDescription"
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={projectDescription}
          onChange={handleDescriptionChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
          העלאת תמונה (אופציונלי)
        </label>
        <input
          type="file"
          id="image"
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          onChange={handleImageUpload}
        />
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
