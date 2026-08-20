import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Arole Adjo — The Heirloom of Trust',
  description:
    'Ajo reimagined. Secure rotating savings circles for Yoruba communities across the UK. Admin Cannot Japa Again.',
  keywords: ['ajo', 'esusu', 'rotating savings', 'yoruba', 'UK', 'tontine', 'arole adjo'],
  openGraph: {
    title: 'Arole Adjo — The Heirloom of Trust',
    description: 'Ajo reimagined. £42k rotated in Manchester. Admin Cannot Japa Again.',
    type: 'website',
    locale: 'en_GB',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#FDFCF8]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
