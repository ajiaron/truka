import { Inter } from 'next/font/google'
import { LinkProps, Link } from 'next/link'
import { Head } from 'next/head';
import './globals.css'
import Home from './page'
import Navbar from './components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Truka',
  description: 'A growing community of entrepeneurs.',
  icons: {
    icon:"/trukalogo.png"
  }
}
export const viewport = {
  width: '1440',
  height:'779',
  initialScale: '1.0',
}
 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-JP2GFR7QN8"`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JP2GFR7QN8');
            `,
          }}
        />
        </Head>
      <body className={inter.className}>

        {children}
      </body>
    </html>
  )
}
