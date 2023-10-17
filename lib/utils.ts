import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as z from 'zod';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function asOptionalField<T extends z.ZodTypeAny>(schema: T) {
  return schema
    .optional()
    .or(/* emptyStringToUndefined */ z.literal('').transform(() => undefined));
}
