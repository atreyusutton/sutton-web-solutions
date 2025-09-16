import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sutton Web Solutions - Web Development That Ships',
  description: 'Professional web development services in Boulder, CO. Clean, fast, and scalable web applications built with React, Next.js, and modern technologies.',
  keywords: ['web development', 'React', 'Next.js', 'Boulder CO', 'frontend development', 'full-stack'],
  authors: [{ name: 'Atreyu Sutton' }],
  creator: 'Atreyu Sutton',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://suttonwebsolutions.com',
    siteName: 'Sutton Web Solutions',
    title: 'Sutton Web Solutions - Web Development That Ships',
    description: 'Professional web development services in Boulder, CO. Clean, fast, and scalable web applications built with React, Next.js, and modern technologies.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sutton Web Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sutton Web Solutions - Web Development That Ships',
    description: 'Professional web development services in Boulder, CO. Clean, fast, and scalable web applications built with React, Next.js, and modern technologies.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        
        {/* Analytics placeholder - uncomment when ready */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              // Analytics code here
              console.log('Analytics loaded');
            `,
          }}
        /> */}
      </body>
    </html>
  );
}
