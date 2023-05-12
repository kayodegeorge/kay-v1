import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Abdulazeez Portfolio',
  description: 'Welcome to my world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <nav className='text-dark bg-background '>
          <div className='py-12 px-[100px] flex justify-between'>
            <h1 className=''>ABDULAZEEZ ISHAQ</h1>
            <div className='flex gap-8'>
              <h1>WORK</h1>
              <h1>ABOUT</h1>
              <h1>RESUME</h1>
              <h1>CONTACT</h1>
            </div>
          </div>
        </nav>
        {children}
        <footer className='text-dark bg-background'>
          <div className='border bg-text-gray'></div>
          <div className='px-[100px] py-6 flex justify-between'>
            <div className=''>
              <h1>Designed by Abdulazeez and Implemented by Kayode </h1>
            </div>
            <div className=''>
              <div className='flex gap-[10px]'>
                <Image
                  height={40}
                  width={40}
                  src={'assets/azeez-twitter.svg'}
                  alt='twitter link'
                ></Image>
                <Image
                  height={40}
                  width={40}
                  src={'assets/azeez-linkedin.svg'}
                  alt='twitter link'
                ></Image>
                <Image
                  height={40}
                  width={40}
                  src={'assets/azeez-dribbble.svg'}
                  alt='twitter link'
                ></Image>
                <Image
                  height={40}
                  width={40}
                  src={'assets/azeez-behance.svg'}
                  alt='twitter link'
                ></Image>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
