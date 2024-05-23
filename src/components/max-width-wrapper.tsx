import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface MaxWidthWrapper {
  children: ReactNode;
  className?: string;
}

const MaxWidthWrapper = ({ className, children }: MaxWidthWrapper) => {
  return <div className={cn('mx-auto max-w-screen-xl p-2 ', className)}>{children}</div>;
};

export default MaxWidthWrapper;
