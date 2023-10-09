// import ClientSessionProvider from '@/contexts/clientProvider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import { getServerSession } from 'next-auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gestor Financeiro',
  description: 'Gerencie suas finanças de forma simples e prática.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const session = getServerSession();
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {/* <ClientSessionProvider session={session}> */}
          {children}
        {/* </ClientSessionProvider> */}
      </body>
    </html>
  )
}
