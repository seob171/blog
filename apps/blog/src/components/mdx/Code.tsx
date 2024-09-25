import type { HTMLAttributes } from 'react';
import React from 'react';

import { cn } from '@/lib/utils';

function Code({ children, className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <code
      className={cn(
        '[p_&]:px-1.5 [p_&]:py-0.5 [p_&]:bg-secondary dark:[p_&]:text-white [p_&]:before:hidden [p_&]:after:hidden [p_&]:rounded',
        className
      )}
      {...props}
    >
      {children}
    </code>
  );
}

export default Code;
