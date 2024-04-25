'use server';

import { IAddProjectForm } from '@/types/forms';

export const addNewProject = async (data: IAddProjectForm) => {
  console.log(data.fullName);
};
