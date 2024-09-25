import type { BlockquoteHTMLAttributes } from 'react';
import React from 'react';

import { cn } from '@/lib/utils';

const BlockQuote = ({ children, className, ...props }: BlockquoteHTMLAttributes<HTMLQuoteElement>) => {
  return (
    <blockquote className={cn('[&_p]:before:hidden [&_p]:after:hidden', className)} {...props}>
      {children}
    </blockquote>
  );
};

export default BlockQuote;
