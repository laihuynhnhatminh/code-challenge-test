import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const customTailwindMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      typography: [
        'typography-base-semibold',
        'typography-base-normal',
        'typography-base-light',

        'typography-small-semibold',
        'typography-small-normal',
        'typography-small-light',

        'typography-xs-semibold',
        'typography-xs-normal',
        'typography-xs-light',

        'typography-tiny-semibold',
        'typography-tiny-normal',
        'typography-tiny-light',
      ],
    } as never, // For TypeScript compatibility
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTailwindMerge(clsx(inputs));
}
