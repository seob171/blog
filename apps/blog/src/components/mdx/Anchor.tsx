import type { AnchorHTMLAttributes } from 'react';
import React from 'react';

import Link from 'next/link';

import { cn } from '@/lib/utils';

function Anchor({ children, href, className, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  // 내부 링크
  if (href?.startsWith('/')) {
    return (
      <Link className={cn('text-primary hover:underline', className)} href={href} {...props}>
        {children}
      </Link>
    );
  }

  // Heading Tag 링크
  if (href?.startsWith('#')) {
    return (
      <a className={className} {...props}>
        {children}
      </a>
    );
  }

  return (
    <a
      className={cn('text-primary hover:underline', className)}
      target="_blank"
      rel="noreferrer"
      href={href}
      {...props}
    >
      {children}
    </a>
  );
}

export default Anchor;
