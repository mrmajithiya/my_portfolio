import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata:Metadata = {
  title: 'Om Majithiya Portfolio',
  description: 'Full-stack developer portfolio using Next.js, React, Tailwind CSS.',
  keywords: ['Portfolio', 'Next.js', 'React', 'Tailwind CSS', 'om majithiya', 'Full-stack Developer'],
  authors: [{ name: 'Om Majithiya', url: 'https://your-portfolio.com' }],
  openGraph: {
    title: 'Om Majithiya Portfolio',
    description: 'Full-stack developer portfolio using Next.js, React, Tailwind CSS.',
    url: 'https://your-portfolio.com',
    siteName: 'Om Majithiya Portfolio',
    images: [
      {
        url: '/opengraph_jiniimage.png',
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
    images: ['/opengraph_jiniimage.png'],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Search Console verification */}
        <meta name="google-site-verification" content="TSf4SxjXP-834c6fkfHLiUsAkJJNLfi__MYNOMbafHY" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
