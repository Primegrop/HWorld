import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hello World App',
  description: 'A simple Hello World app with a modal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 