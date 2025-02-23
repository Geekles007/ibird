import './globals.css';
import type { Metadata } from 'next';
// import { Poppins } from 'next/font/google';
import dynamic from 'next/dynamic';

const Loader = dynamic(() => import('@/components/shared/atoms/loader'));
const CustomCursor = dynamic(
  () => import('@/components/shared/atoms/custom-cursor')
);

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['300'],
//   display: 'swap',
//   preload: true,
// });

export const metadata: Metadata = {
  title: 'iBIRD design',
  description: `'iBIRD DESIGN's website - Let us make it great and amaze you'`,
  authors: [
    {
      name: 'TONDJI NIAT J. Lee',
      url: 'http://www.ebirly.com',
    },
  ],
  keywords: [
    'creative',
    'design',
    'react',
    'developer',
    'typescript',
    'portofolio',
    'resume',
    'designer',
    'passionated',
  ],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Loader />
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
