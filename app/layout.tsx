import type { Metadata, Viewport } from 'next';
import './globals.css';

import { GeistSans } from 'geist/font/sans';

import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: "Hey, I'm camdzic",
  description: 'A software engineer from Bosnia & Herzegovina.'
};

export const viewport: Viewport = {
  themeColor: '#38bdf8'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const geist = GeistSans;

  return (
    <html lang="en">
      <body
        className={`${geist.className} min-h-screen flex items-center justify-center`}
      >
        <main className="max-w-5xl mx-auto">
          <section className="px-4 sm:px-6 lg:px-8 py-16">
            {children}
            <Analytics />
          </section>
        </main>
      </body>
    </html>
  );
}
