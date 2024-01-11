import { Inter } from 'next/font/google'
import { LinkProps, Link } from 'next/link'
import './globals.css'
import Home from './page'
import Navbar from './components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Truka',
  description: 'A growing community of entrepeneurs.',
  icons: {
    icon:"/trukalogo.png"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
