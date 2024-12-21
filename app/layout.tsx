import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';


const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Manav Panchal',
  description:
    'I&apos;m Shubham Patil, a full-stack developer from India, with a passion for building things and exploring new technologies creating functional and user-friendly web experiences',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#1B1B1F] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
