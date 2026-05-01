import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import './globals.css'

const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Julien Senopati',
  description: 'Get to know me',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={jost.className}>
      <body>{children}</body>
    </html>
  )
}
