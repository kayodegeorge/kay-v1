'use client'

import Image from 'next/image'
import Link from 'next/link'

import { motion, Variants } from 'framer-motion'

const projects = [
  {
    title: 'Paypen',
    description:
      'A web app built solely for the purspose of employees pension payment',
    image: 'assets/paypen-image.svg',
  },
  {
    title: 'Instaclean website',
    description:
      'Tech-powered marketplace for professional cleaning services in Nigeria',
    image: 'assets/instaclean-image.svg',
  },
  {
    title: 'Gida App',
    description:
      'A mobile app that connects vetted professional cleaning service providers to customers',
    image: 'assets/gida-image.svg',
  },
  {
    title: 'Raha App',
    description:
      'A payment app that offers a fast, secure, and convenient way to make transactions',
    image: 'assets/raha-image.svg',
  },
]

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.7,
      // duration: 0.4,
      // delay: 0.5,
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0 } },
}

export default function Home() {
  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='show'
      transition={{ staggerChildren: 0.1 }}
      className='px-4 lg:px-24'
    >
      <section className='mt-14 lg:mt-56'>
        <motion.h1
          variants={item}
          className='text-4xl lg:max-w-4xl lg:text-[102px] lg:leading-[96px]'
        >
          Product Designer & No-code Developer
        </motion.h1>

        <motion.div variants={item} className='flex flex-col gap-8 lg:flex-row'>
          <p className='mt-6 max-w-lg leading-9 lg:text-2xl'>
            Hi there!👋🏽 I&apos;m Abdulazeez , a product designer skilled in user
            experience and visual design — I strive to create intuitive and
            engaging experiences that excites users and businesses.
          </p>

          <div className='flex items-center'>
            <Link
              href='/about'
              className="relative flex w-fit items-center gap-3 overflow-hidden rounded-full border border-black py-4 pl-6 pr-7 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-full before:-z-50 before:border-[#01EBDE] before:bg-[#01EBDE] before:transition-[top] before:duration-200 before:ease-in before:content-[''] hover:fill-white  hover:before:top-0"
            >
              <span className='uppercase'>Learn more</span>

              <svg
                width='17'
                height='15'
                viewBox='0 0 17 15'
                fill='inherit'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M0 7.72571C0 7.34601 0.282154 7.03222 0.648229 6.98255L0.75 6.97571L15.75 6.97571C16.1642 6.97571 16.5 7.31149 16.5 7.72571C16.5 8.1054 16.2178 8.4192 15.8518 8.46886L15.75 8.47571L0.75 8.47571C0.335786 8.47571 0 8.13992 0 7.72571Z' />
                <path d='M9.17101 2.23278C8.87749 1.94051 8.87646 1.46564 9.16872 1.17212C9.43442 0.905279 9.85103 0.880177 10.1451 1.0974L10.2294 1.16983L16.2794 7.19383C16.547 7.46032 16.5714 7.87843 16.3524 8.17251L16.2794 8.25673L10.2294 14.2817C9.93593 14.574 9.46105 14.573 9.16877 14.2795C8.90305 14.0127 8.87971 13.596 9.09817 13.3028L9.17096 13.2189L14.687 7.72501L9.17101 2.23278Z' />
              </svg>
            </Link>
          </div>
        </motion.div>
      </section>

      <section className='mt-24 lg:mt-52'>
        <h2 className='text-4xl lg:text-[102px] lg:leading-tight'>
          Selected Projects
        </h2>

        <div className='mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14'>
          {projects.map((project) => (
            <div key={project.title}>
              <div className='relative h-80'>
                <Image
                  alt='Project Images'
                  src={project.image}
                  fill
                  className='object-cover'
                />
              </div>

              <div className='border border-x border-b p-4'>
                <div className='flex items-center justify-between'>
                  <h3 className='text-xl'>{project.title}</h3>

                  <Link
                    href='/'
                    className='flex h-8 w-8 items-center justify-center rounded-full bg-black'
                  >
                    <svg
                      width='17'
                      height='15'
                      viewBox='0 0 17 15'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M0 7.72571C0 7.34601 0.282154 7.03222 0.648229 6.98255L0.75 6.97571L15.75 6.97571C16.1642 6.97571 16.5 7.31149 16.5 7.72571C16.5 8.1054 16.2178 8.4192 15.8518 8.46886L15.75 8.47571L0.75 8.47571C0.335786 8.47571 0 8.13992 0 7.72571Z'
                        fill='#FFFFFF'
                      />
                      <path
                        d='M9.17101 2.23278C8.87749 1.94051 8.87646 1.46564 9.16872 1.17212C9.43442 0.905279 9.85103 0.880177 10.1451 1.0974L10.2294 1.16983L16.2794 7.19383C16.547 7.46032 16.5714 7.87843 16.3524 8.17251L16.2794 8.25673L10.2294 14.2817C9.93593 14.574 9.46105 14.573 9.16877 14.2795C8.90305 14.0127 8.87971 13.596 9.09817 13.3028L9.17096 13.2189L14.687 7.72501L9.17101 2.23278Z'
                        fill='#FFFFFF'
                      />
                    </svg>
                  </Link>
                </div>

                <p className='mt-3 text-sm text-[#828282]'>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  )
}
