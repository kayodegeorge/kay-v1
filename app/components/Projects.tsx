import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const projects = [
  {
    title: 'Vollie Finance',
    description: 'A web application for businesses',
    image: '/assets/vollie.jpg',
    tags: ['nextjs', 'tailwind', 'gsap'],
    url: 'https://web-app-bay-three.vercel.app/login',
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
    title: 'Henzo Logistics',
    description: 'Delivery at your doorstep',
    image: '/assets/henzo.jpg',
    tags: ['vuejs', 'vuetify', 'airtable'],
    url: 'https://henzologistics.com',
  },
  {
    title: 'Nook n Craddle ',
    description: 'A savings and investment app that helps you meet your goals',
    image: '/assets/nook.jpg',
    tags: ['reactjs', 'vite', 'sass'],
    url: 'https://nookncraddle.com',
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
            className='relative block h-80 overflow-hidden lg:order-2 lg:col-span-7 lg:h-[489px]'
          >
            <Image
              alt='Project Images'
              src={project.image}
              fill
              className='object-cover transition duration-500 ease-in-out hover:scale-110'
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
