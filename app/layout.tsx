import type { Metadata } from 'next'
import '7.css/dist/7.scoped.css'
import './globals.css'

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
