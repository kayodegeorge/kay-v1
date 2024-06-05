'use client'

import Image from 'next/image'
import Link from 'next/link'
import Projects from '../components/Projects'

const projects = [
  {
    title: 'Vollie Finance',
    description: 'A web application for businesses',
    image: '/assets/vollie.jpg',
    tags: [
      'ui/ux design',
      'web app',
      'web design',
      'interaction design',
      'pension payment',
    ],
    url: '/work/paypen',
  },
  {
    title: 'Qilo Health',
    description:
      'A science-based weight loss solution to help you lose weight and keep it off.',
    image: '/assets/qilo.jpg',
    tags: ['ui/ux design', 'web design', 'customer services'],
    url: '/work/paypen',
  },
  {
    title: 'Henzo Logistics',
    description: 'Delivery at your doorstep',
    image: '/assets/henzo.jpg',
    tags: [
      'ui/ux design',
      'interaction design',
      'product strategy',
      'mobile app',
      'customer service',
    ],
    url: '/work/paypen',
  },
  {
    title: 'Safesave ',
    description: 'A savings and investment app that helps you meet your goals',
    image: '/assets/safesave.jpg',
    tags: [
      'ui/ux design',
      'mobile app',
      'fintech',
      'interaction design',
      'product strategy',
    ],
    url: '/work/paypen',
  },
]

export default function Work() {
  return (
    <div className='mt-6 px-4 lg:mt-[187px] lg:px-[100px]'>
      <h1 className='text-4xl leading-[1.2] lg:text-[102px]'>
        Selected Projects
      </h1>
      <Projects />
    </div>
  )
}
