import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SocketProvider } from '@/utils/socketConnection'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Math Quiz',
  description: 'fun with math',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="flex flex-col min-h-screen bg-gray-900">
  <header className="w-full py-4 px-10 bg-gray-800 flex items-center justify-between shadow-md">
    <div className="flex items-center space-x-3">
      <div className="bg-indigo-500 p-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
        </svg>
      </div>
      <h1 className="text-2xl font-bold text-white">Math Quiz Game</h1>
    </div>
    <span className="text-sm text-gray-300">Learning through Play</span>
  </header>
      <SocketProvider>
      {children}
      </SocketProvider>
      <footer className="w-full py-4 px-10 text-center text-sm bg-gray-800 text-white shadow-inner">
    © 2023 Math Quiz Game
  </footer>
</div>
      </body>
    </html>
  )
}
