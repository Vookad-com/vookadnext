import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import store from '@/redux/store'
import { Provider } from 'react-redux'
import { useEffect } from 'react'
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ["100","200","400","600","700","800"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>
          VOOKAD
        </title>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={` ${poppins.className}`}>
        {children}
        <Toaster className={` ${poppins.className}`} />
      </body>
    </html>
  )
}
