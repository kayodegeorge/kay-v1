import Link from 'next/link'
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillDribbbleCircle,
  AiOutlineBehance,
} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer className='text-dark px-4 lg:px-[100px]'>
      <div className='flex flex-col items-center justify-between gap-4 pb-8 pt-6 lg:flex-row lg:gap-0 lg:border-t lg:border-[#D9D9D9]'>
        <div className=' text-center lg:text-left'>
          Designed by Abdulazeez and Implemented by
          <Link
            className='ml-1'
            href='https://www.linkedin.com/in/kayode-george-43a7a519a/
'
          >
            Kayode
          </Link>
        </div>

        <div className=''>
          <div className='flex gap-[10px]'>
            <a
              href='https://twitter.com/azeezmadeit'
              className='flex h-10 w-10 items-center justify-center rounded-full bg-text-dark text-white hover:bg-bg-lemon hover:text-black'
              rel='noopener noreferrer'
              target='_blank'
            >
              <AiOutlineTwitter size={20} />
            </a>

            <a
              href='https://www.linkedin.com/in/abdulazeezishaq'
              className='flex h-10 w-10 items-center justify-center rounded-full bg-text-dark text-white hover:bg-bg-lemon hover:text-black'
              rel='noopener noreferrer'
              target='_blank'
            >
              <AiFillLinkedin size={20} />
            </a>

            <a
              href='https://dribbble.com/Abdulazeezishaq'
              className='flex h-10 w-10 items-center justify-center rounded-full bg-text-dark text-white hover:bg-bg-lemon hover:text-black'
              rel='noopener noreferrer'
              target='_blank'
            >
              <AiFillDribbbleCircle size={20} />
            </a>

            <a
              href='https://www.behance.net/abdulazeezishaq'
              className='flex h-10 w-10 items-center justify-center rounded-full bg-text-dark text-white hover:bg-bg-lemon hover:text-black'
              rel='noopener noreferrer'
              target='_blank'
            >
              <AiOutlineBehance size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
