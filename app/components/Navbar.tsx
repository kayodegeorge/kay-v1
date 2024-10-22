'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Menu from './Menu'
import { cn } from '@/lib/utils'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className='text-dark left-0 top-0 z-[999] w-full'>
      <div
        className={cn(
          'left-0 top-0 z-50 flex w-full justify-between bg-white px-4 py-8 transition ease-in-out lg:px-[100px]',
          {
            'bg-text-dark text-text-gray': menuOpen,
          }
        )}
      >
        <Link href='/' className='uppercase'>
          <span>kayode.</span>
        </Link>

        <div className='hidden gap-8 lg:flex'>
          <Link
            href='/work'
            className={cn(
              "relative overflow-hidden pb-2 uppercase after:absolute after:bottom-1 after:left-0 after:h-0.5 after:w-full after:-translate-x-full after:bg-black after:transition after:duration-300 after:ease-in after:content-[''] after:hover:translate-x-0"
            )}
          >
            work
          </Link>

          <Link
            href='/about'
            className={cn(
              "relative overflow-hidden pb-2 uppercase after:absolute after:bottom-1 after:left-0 after:h-0.5 after:w-full after:-translate-x-full after:bg-black after:transition after:duration-300 after:ease-in after:content-[''] after:hover:translate-x-0"
            )}
          >
            about
          </Link>

          <a
            href='https://docs.google.com/document/d/1LlnbNJbAwnL437E2co8_Noz6jwxVNPaqcz3vlxvaCX0/edit#heading=h.djx0e3x77gw4'
            className={cn(
              "relative overflow-hidden pb-2 uppercase after:absolute after:bottom-1 after:left-0 after:h-0.5 after:w-full after:-translate-x-full after:bg-black after:transition after:duration-300 after:ease-in after:content-[''] after:hover:translate-x-0"
            )}
            rel='noopener noreferrer'
            target='_blank'
          >
            resume
          </a>

          <a
            href='mailto:gkayode75@gmail.com'
            className={cn(
              "relative overflow-hidden pb-2 uppercase after:absolute after:bottom-1 after:left-0 after:h-0.5 after:w-full after:-translate-x-full after:bg-black after:transition after:duration-300 after:ease-in after:content-[''] after:hover:translate-x-0"
            )}
          >
            contact
          </a>
        </div>
      </div>

      <Menu menuOpen={menuOpen} />
    </nav>
  )
}

export default Navbar
