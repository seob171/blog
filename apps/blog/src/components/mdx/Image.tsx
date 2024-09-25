import React from 'react';

import type { ImageProps } from 'next/image';
import NextImage from 'next/image';

import { cn } from '@/lib/utils';

function Image({ alt, className, ...props }: ImageProps) {
  return <NextImage alt={alt} {...props} className={cn('rounded-md', className)} priority />;
}

export default Image;
