import './globals.css'
import { Poppins } from '@next/font/google';


const poppins = Poppins({subsets: ['latin'],
weight: ['300', '500']
})

export const metadata = {
  title: 'Berrys ToDo',
  description:  '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
