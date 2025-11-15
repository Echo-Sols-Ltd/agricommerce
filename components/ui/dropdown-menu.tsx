'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

const DropdownMenu = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative inline-block text-left">{children}</div>;
};

const DropdownMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
  }
>(({ className, children, asChild = false, ...props }, ref) => {
  if (asChild) {
    return <>{children}</>;
  }

  return (
    <button ref={ref} className={cn('inline-flex justify-center', className)} {...props}>
      {children}
    </button>
  );
});
DropdownMenuTrigger.displayName = 'DropdownMenuTrigger';

const DropdownMenuContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    align?: 'start' | 'center' | 'end';
    forceMount?: boolean;
  }
>(({ className, align = 'center', children, ...props }, ref) => {
  const alignClass = {
    start: 'left-0',
    center: 'left-1/2 transform -translate-x-1/2',
    end: 'right-0',
  }[align];

  return (
    <div
      ref={ref}
      className={cn(
        'absolute z-50 mt-2 w-56 rounded-md border bg-white shadow-lg',
        alignClass,
        className
      )}
      {...props}
    >
      <div className="py-1">{children}</div>
    </div>
  );
});
DropdownMenuContent.displayName = 'DropdownMenuContent';

const DropdownMenuLabel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('px-4 py-2 text-sm font-semibold text-gray-900', className)}
      {...props}
    />
  )
);
DropdownMenuLabel.displayName = 'DropdownMenuLabel';

const DropdownMenuItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex cursor-pointer items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100',
        className
      )}
      {...props}
    />
  )
);
DropdownMenuItem.displayName = 'DropdownMenuItem';

const DropdownMenuSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('my-1 h-px bg-gray-200', className)} {...props} />
));
DropdownMenuSeparator.displayName = 'DropdownMenuSeparator';

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
};
