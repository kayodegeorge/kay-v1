import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const projects = [
  {
    title: 'YPM Community',
    description: 'Delivery at your doorstep',
    image: '/assets/ypmc.png',
    tags: ['react', 'react-native', 'expo'],
    url: 'https://ypmcommunity.com',
  },
  {
    title: 'Borro Finance ',
    description: 'Borrow cash without selling',
    image: '/assets/borro.png',
    tags: ['nextjs', 'tailwind', 'styled-components'],
    url: 'https://borro.finance',
  },
  {
    title: 'Qilo Health',
    description:
      'A science-based weight loss solution to help you lose weight and keep it off.',
    image: '/assets/qilo.jpg',
    tags: ['nextjs', 'prismic', 'scss'],
    url: 'https://qilo.co',
  },

  {
    title: 'Check my People',
    description:
      'An all in one platform to help you verify & confirm that employees are who they say they are',
    image: '/assets/cmp.png',
    tags: ['reactjs', 'vite', 'sass'],
    url: 'https://checkmypeople.com',
  },
]

export default function Projects() {
  return (
    <div className='mt-24 space-y-14 border-b border-[#CFCFCF] pb-14 lg:mt-[120px]'>
      {projects.map((project) => (
        <div
          key={project.title}
          className='border-t border-[#CFCFCF] pt-14 lg:grid lg:grid-cols-12 lg:gap-20'
        >
          <Link
            href={project.url}
            target='_blank'
            rel='noopener noreferrer'
            className='relative block h-80 overflow-hidden bg-gray-50 lg:order-2 lg:col-span-7 lg:h-[489px]'
          >
            <Image
              alt='Project Images'
              src={project.image}
              fill
              className='object-contain transition duration-500 ease-in-out'
            />
          </Link>

          <div className='mt-8 lg:order-1 lg:col-span-5 lg:mt-0 lg:flex lg:flex-col lg:justify-between'>
            <div>
              <h2 className='text-2xl leading-[1.2] lg:text-[2rem]'>
                {project.title}
              </h2>

              <p className='mt-6 text-[20px] font-light leading-6 text-[#828282]'>
                {project.description}
              </p>

              <div className='mt-6 flex flex-wrap gap-2'>
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className='rounded-full border border-[#CCCCCC] px-4 py-2 text-sm uppercase text-[#314263]'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
