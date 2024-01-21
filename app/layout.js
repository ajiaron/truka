import { Inter } from 'next/font/google'
import { LinkProps, Link } from 'next/link'
import Head from 'next/head';
import './globals.css'
import Home from './page'
import Navbar from './components/navbar'
import { GoogleAnalytics } from '@next/third-parties/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Truka',
  description: 'A growing community of entrepeneurs.',
  icons: {
    icon:"/trukalogo.png"
  },

}
export const viewport = {
  width: '1440',
  height:'779',
  initialScale: '1.0',
}
 

export default function RootLayout({ children }) {
  const gaTrackingId = 'G-JP2GFR7QN8'; // Replace with your tracking ID

  return (
    <html lang="en">

      <body>
        {children}
      </body>
      <GoogleAnalytics gaId="G-JP2GFR7QN8" />
    </html>
  );
}