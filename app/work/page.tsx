import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: 'Paypen',
    description:
      'A web app built solely for the purspose of employees pension payment',
    image: 'assets/paypen-image.svg',
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
    title: 'Instaclean website',
    description:
      'Tech-powered marketplace for professional cleaning services in Nigeria',
    image: 'assets/instaclean-image.svg',
    tags: ['ui/ux design', 'web design', 'customer services'],
  },
  {
    title: 'Gida App',
    description:
      'A mobile app that connects vetted professional cleaning service providers to customers',
    image: 'assets/gida-image.svg',
    tags: [
      'ui/ux design',
      'interaction design',
      'product strategy',
      'mobile app',
      'customer service',
    ],
  },
  {
    title: 'Raha App',
    description:
      'A payment app that offers a fast, secure, and convenient way to make transactions',
    image: 'assets/raha-image.svg',
    tags: [
      'ui/ux design',
      'mobile app',
      'fintech',
      'interaction design',
      'product strategy',
    ],
  },
]

export default function Work() {
  return (
    <div className='mt-6 px-4 lg:mt-[187px] lg:px-[100px]'>
      <h1 className='text-4xl leading-[1.2] lg:text-[102px]'>
        Selected Projects
      </h1>

      <div className='mt-24 space-y-14 border-b border-[#CFCFCF] pb-14 lg:mt-[120px]'>
        {projects.map((project) => (
          <div
            key={project.title}
            className='border-t border-[#CFCFCF] pt-14 lg:grid lg:grid-cols-12 lg:gap-20'
          >
            <Link
              href='/work'
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

                <p className='mt-6 text-[20px] leading-6 text-[#828282]'>
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

              <div className='mt-12 lg:mt-0'>
                <Link
                  href='/work'
                  className='flex w-fit items-center gap-2 overflow-hidden rounded-full bg-text-dark px-6 py-3 '
                >
                  <span className='uppercase text-white'>Read case study</span>

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
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
