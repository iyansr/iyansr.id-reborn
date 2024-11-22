import type { ClassValue } from 'clsx';

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...classes: ClassValue[]): string {
  return twMerge(clsx(classes));
}
