import React from 'react';

interface ProjectDescriptionProps {
  projectDescription: string;
  handleProjectDescriptionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ projectDescription, handleProjectDescriptionChange }) => {
  return (
    <div className='w-[100%]'>
      <p className="text-xl font-bold mb-4 mt-4 text-right">תיאור פרוייקט</p>
      <textarea
        className='h-56 dark:bg-gray-700 bg-gray-200 w-[100%] rounded-md'
        placeholder="טקסט חופשי"
        value={projectDescription}
        onChange={handleProjectDescriptionChange}
      />
    </div>
  );
};