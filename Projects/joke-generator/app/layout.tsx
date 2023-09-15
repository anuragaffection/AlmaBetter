import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Joke Generator ',
  description: 'Discover endless laughter with JokeX, your go-to joke generator! Tune in for a dose of humor and let the laughter roll with our hilarious jokes.',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>

        <Navbar></Navbar>

        {children}
        
        <Footer></Footer>
      </body>

    </html>
  )
}
