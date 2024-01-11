import { Inter } from 'next/font/google'
import Head from 'next/head'
import { LinkProps, Link } from 'next/link'
import './globals.css'
import logo from '../public/truka.png'
import Navbar from './components/navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Truka',
  description: 'A growing community of entrepeneurs.',
  icons: {
    icon:"/trukaicon.png"
  }
}

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta charset="utf-8"></meta>
        <meta itemprop="name" content="Truka"></meta>
        <meta itemprop="url" content="https://www.truka.vercel.app/"></meta>
        <link rel="icon" type="image/x-icon" href="/truka.png" />
      </Head>
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </>
  )
}
