'use client';

import { NextUIProvider } from '@nextui-org/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <div className="dark text-foreground bg-background">
        {children}
      </div>
    </NextUIProvider>
  );
}