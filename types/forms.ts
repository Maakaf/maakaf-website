import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';

export interface FormFieldRegistration {
  errors?: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
}

export interface IAddProjectForm {
  fullName: string;
  email: string;
  projectName: string;
  projectDescription: string;
  repoLink?: string;
  file?: FileList;
}
