import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from './components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Agendar Viagem',
  description: 'Uma aplicação para agendar viagens',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="h-screen flex flex-row justify-start">
          <Sidebar />
          <div className='bg-primary flex-1 p-4 text-white'>

          </div>
          {children}
        </main>
      </body>
    </html>
  )
}
