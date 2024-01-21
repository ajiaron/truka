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
  },
  scripts: [
    {
      src: `https://www.googletagmanager.com/gtag/js?id=G-JP2GFR7QN8`,
      async: true
    },
    {
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-JP2GFR7QN8', {
          page_path: window.location.pathname,
        });
      `
    }
  ]
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
        {metadata.scripts.map((script, index) => (
          script.src ? (
            <script key={index} src={script.src} async={script.async}></script>
          ) : (
            <script key={index} dangerouslySetInnerHTML={{ __html: script.innerHTML }}></script>
          )
        ))}
        </Head>
      <body className={inter.className}>

        {children}
      </body>
    </html>
  )
}
