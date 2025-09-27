'use client';

import { ThemeProvider } from 'next-themes';
import AnimatedLayout from './AnimatedLayout';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AnimatedLayout>{children}</AnimatedLayout>
    </ThemeProvider>
  );
}
