import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';

export interface FormFieldRegistration {
  errors?: FieldErrors;
  register: UseFormRegister<FieldValues>;
}
