import React from 'react';

interface ProjectDescriptionProps {
  projectDescription: string;
  handleProjectDescriptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ projectDescription, handleProjectDescriptionChange }) => {
  return (
    <div className='w-[100%]'>
      <p className="text-xl font-bold mb-4 text-right">תיאור פרוייקט</p>
      <textarea
        className='h-56 bg-gray-700 dark:bg-gray-200 w-[100%] rounded-md'
        placeholder="טקסט חופשי"
        value={projectDescription}
        onChange={handleProjectDescriptionChange}
      />
    </div>
  );
};