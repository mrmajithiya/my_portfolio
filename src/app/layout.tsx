import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata:Metadata = {
  title: 'Om Majithiya Portfolio',
  description: 'Full-stack developer portfolio using Next.js, React, Tailwind CSS.',
  keywords: ['Portfolio', 'Next.js', 'React', 'Tailwind CSS', 'om majithiya', 'Full-stack Developer'],
  authors: [{ name: 'Om Majithiya', url: 'https://ommajithiya.vercel.app/' }],
  openGraph: {
    title: 'Om Majithiya Portfolio',
    description: 'Full-stack developer portfolio using Next.js, React, Tailwind CSS.',
    url: 'https://ommajithiya.vercel.app/',
    siteName: 'Om Majithiya Portfolio',
    images: [
      {
        url: '/mr_majithiya.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Om Majithiya Portfolio',
    description: 'Full-stack developer portfolio using Next.js, React, Tailwind CSS.',
    images: ['/mr_majithiya.jpg'],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
