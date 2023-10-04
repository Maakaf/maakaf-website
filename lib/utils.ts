import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: classNames.ArgumentArray): string {
  return twMerge(classNames(inputs));
}

export function uniqueArray<T>(arr: any[]): T[] {
  return Array.from(new Set(arr));
}
