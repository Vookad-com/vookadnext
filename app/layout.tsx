'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import store from '@/redux/store'
import { Provider } from 'react-redux'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}><Provider store={store}>{children}</Provider></body>
    </html>
  )
}
