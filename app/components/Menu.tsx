import { cn } from '@/lib/utils'
import Link from 'next/link'
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineTwitter,
} from 'react-icons/ai'

type Props = {
  menuOpen: boolean
}

const Menu = ({ menuOpen }: Props) => {
  return (
    <div
      className={cn(
        'fixed bottom-auto left-0 right-auto top-[88px] z-10 h-[calc(100vh-88px)] w-full bg-text-dark transition-[transform,opacity] duration-[500ms] ease-in-out lg:hidden',
        !menuOpen &&
          '-translate-y-[calc(100%+120px)] lg:-translate-y-[calc(100%+120px)]'
      )}
    >
      <div className='mt-20 flex flex-col items-center gap-11 text-4xl uppercase text-white'>
        <Link href='/work'>work</Link>
        <Link href='/about'>about</Link>
        <Link href='/'>resume</Link>
        <Link href='/'>contact</Link>
      </div>

      <div className='absolute bottom-20 left-0 flex w-full justify-center'>
        <div className=''>
          <div className='flex gap-[10px]'>
            <a
              href='https://twitter.com/whereiskayode'
              className='flex h-10 w-10 items-center justify-center rounded-full bg-text-dark text-white hover:bg-bg-lemon hover:text-black'
              rel='noopener noreferrer'
              target='_blank'
            >
              <AiOutlineTwitter size={20} />
            </a>

            <a
              href='https://www.linkedin.com/in/kayode-george-43a7a519a/'
              className='flex h-10 w-10 items-center justify-center rounded-full bg-text-dark text-white hover:bg-bg-lemon hover:text-black'
              rel='noopener noreferrer'
              target='_blank'
            >
              <AiFillLinkedin size={20} />
            </a>

            <a
              href='https://github.com/kayodegeorge'
              className='flex h-10 w-10 items-center justify-center rounded-full bg-text-dark text-white hover:bg-bg-lemon hover:text-black'
              rel='noopener noreferrer'
              target='_blank'
            >
              <AiFillGithub size={20} />
            </a>

            <a
              href='mailto:gkayode75@gmail.com'
              className='flex h-10 w-10 items-center justify-center rounded-full bg-text-dark text-white hover:bg-bg-lemon hover:text-black'
              rel='noopener noreferrer'
              target='_blank'
            >
              <AiOutlineMail size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
