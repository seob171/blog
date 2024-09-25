import type { HTMLAttributes } from 'react';
import React from 'react';

import { cn } from '@/lib/utils';

function ErrorMessage({ children, className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn('text-destructive text-sm', `${children ? 'flex' : 'hidden'}`, className)} {...props}>
      {children}
    </span>
  );
}

export default ErrorMessage;
