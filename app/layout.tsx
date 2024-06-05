import './globals.css'
import { neueMontreal } from './styles/fonts'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import StartAProject from './components/StartAProject'

export const metadata = {
  title: 'Kayode George | Frontend Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={neueMontreal.className}>
        <Navbar />

        {children}

        <StartAProject />
        <Footer />
      </body>
    </html>
  )
}
