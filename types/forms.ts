import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';

export interface FormFieldRegistration {
  errors?: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
}
