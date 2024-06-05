'use client'

import Image from 'next/image'
import Link from 'next/link'

import { motion, Variants } from 'framer-motion'
import Projects from './components/Projects'

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
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
      // duration: 0.4,
      // delay: 0.5,
    },
  },
}

const item: Variants = {
  hidden: {
    y: 200,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  show: {
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
}

export default function Home() {
  return (
    <motion.div className='px-4 lg:px-[100px]'>
      <motion.section
        variants={container}
        initial='hidden'
        animate='show'
        className=' mt-[100px] overflow-hidden lg:mt-[220px]'
      >
        <motion.div
          variants={container}
          initial='hidden'
          animate='show'
          className='overflow-hidden'
        >
          <motion.h1
            variants={item}
            className='text-4xl lg:max-w-4xl lg:text-[102px] lg:leading-[96px]'
          >
            Frontend Developer.
          </motion.h1>

          {/* <motion.h1
            variants={item}
            className='text-4xl lg:max-w-4xl lg:text-[102px] lg:leading-[96px]'
          >
            Building Beautiful Web Experiences
          </motion.h1> */}
        </motion.div>

        <motion.div
          variants={{
            hidden: {
              y: 200,
              transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
            },
            show: {
              y: 0,
              transition: {
                ease: [0.455, 0.03, 0.515, 0.955],
                duration: 0.75,
                delay: 2,
              },
            },
          }}
          className='flex flex-col gap-8 lg:flex-row lg:gap-[60px]'
        >
          <p className='mt-[96px] w-[537px] text-[24px] font-light lg:mt-12 lg:text-2xl'>
            Hi there, i am kayode 👋🏽 front end developer focused on building
            beautiful web experiences.
          </p>

          <div className=' flex items-center'>
            <Link
              href='/about'
              className="relative mt-5 flex w-fit items-center gap-3 overflow-hidden rounded-full border border-black px-[24px] py-[14px] before:absolute before:bottom-0 before:left-0 before:right-0 before:top-full before:-z-50 before:bg-bg-lemon before:transition-[top] before:duration-200 before:ease-in before:content-[''] hover:border-bg-lemon hover:fill-black hover:before:top-0"
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
      </motion.section>

      <section className='mt-[200px] lg:mt-52'>
        <h2 className='text-4xl lg:text-[102px] lg:leading-tight'>
          Selected Projects
        </h2>

        {/* <div className='mt-16 grid grid-cols-1 gap-[32px] lg:grid-cols-2 lg:gap-[52px] '>
          {projects.map((project) => (
            <div key={project.title}>
              <div className='relative h-[459px] overflow-hidden'>
                <Link href='/work/paypen'>
                  <Image
                    alt='Project Images'
                    src={project.image}
                    fill
                    className='object-cover transition duration-500 ease-in-out hover:scale-110'
                  />
                </Link>
              </div>

              <div className='w-full border border-x border-b p-8'>
                <div className='flex items-center justify-between'>
                  <h3 className='text-[32px] leading-[39px]'>
                    {project.title}
                  </h3>

                  <Link
                    href='/work/paypen'
                    className='flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black px-[8px] py-[6px] '
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

                <p className='mt-3 text-[20px] leading-6 text-[#828282]'>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div> */}
        <Projects />
      </section>
    </motion.div>
  )
}
