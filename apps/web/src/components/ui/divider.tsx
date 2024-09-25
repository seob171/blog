import * as React from 'react';

import { cn } from '@/lib/utils';

// @memo : 커스텀 컴포넌트

const Divider = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('flex w-full my-6', className)} {...props} />
);
Divider.displayName = 'Divider';

const HR = React.forwardRef<HTMLHRElement, React.HTMLAttributes<HTMLHRElement>>(({ className, ...props }, ref) => (
  <hr ref={ref} className={cn('flex w-full h-[1px] bg-secondary border-0', className)} {...props} />
));
HR.displayName = 'Horizontal';

export { Divider, HR };
