import './globals.css'
import { Poppins } from 'next/font/google'
import Providers from '@/providers/Providers'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Next js Authentication',
  description: 'This is a simple next js authenticating.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='light' style={{ colorScheme: "light" }}>
      <body className={`${poppins.className} h-full scroll-smooth antialiased`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
