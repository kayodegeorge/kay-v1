'use client'
import Hobbies from '../components/Hobbies'
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineTwitter,
} from 'react-icons/ai'

const roles = [
  { id: '01', role: 'UI/UX designer, Brandux' },
  { id: '02', role: 'Product designer, Instaclean' },
  { id: '03', role: 'Product design tutor, Codar' },
]

export default function About() {
  return (
    <div className='px-4 lg:px-24'>
      <section className='mt-14 lg:mt-[145px]'>
        <h1 className='text-4xl lg:max-w-4xl lg:text-[102px] lg:leading-[96px]'>
          Kayode George
        </h1>

        <p className='mt-6 max-w-6xl lg:text-2xl'>
          Focused on building software products with great user experience;
          building interfaces that are thoughful, intuitive and generally
          accessible. I have with experience in working with both front-end and
          back-end JavaScript frameworks and libraries for personal projects,
          client-facing products, and teams with fast development cycles.
        </p>

        <div className='mb-14 mt-6 lg:mb-32'>
          <div className=''>
            <div className='flex gap-[10px]'>
              <a
                href='https://twitter.com/thekayodeg'
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
      </section>

      <section className='border-t border-[#D9D9D9] pt-8 lg:pt-32'>
        <div className='flex flex-col gap-6 lg:flex-row lg:justify-between lg:gap-0'>
          <div>
            <h2 className='text-4xl lg:max-w-4xl lg:text-[102px] lg:leading-[96px]'>
              Work Experience
            </h2>

            <p className='mt-6 max-w-4xl lg:text-2xl'>
              Over the years, I have collaborated extensively with product
              managers and engineers to develop and deploy web applications and
              software solutions that ensure a seamless experience across
              diverse screen sizes, enhancing the entire user journey. My work
              is driven by a deep understanding of user-centric design
              principles and a commitment to delivering high-quality, performant
              code. Previously, I worked as a Frontend Engineer at Brimble,
              where I crafted thoughtful and inclusive user experiences that
              strictly adhered to web standards. My role involved not only
              developing intuitive interfaces but also optimizing performance
              and accessibility to ensure our applications were usable by the
              widest possible audience. This position honed my ability to
              balance aesthetic design with functional requirements, resulting
              in products that are both beautiful and easy to use. Additionally,
              I served as the Lead Frontend Engineer at Astrapay, overseeing the
              complete development and deployment of their internet banking
              platform from inception to launch.
            </p>
          </div>

          <div className='shrink-0'>
            <a
              href='https://docs.google.com/document/d/1LlnbNJbAwnL437E2co8_Noz6jwxVNPaqcz3vlxvaCX0/edit#heading=h.djx0e3x77gw4'
              rel='noopener noreferrer'
              target='_blank'
            >
              <div
                className="relative flex w-fit items-center gap-3 overflow-hidden rounded-full border border-black py-3 pl-6 pr-7 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-full before:-z-50 before:bg-bg-lemon
              before:transition-[top] before:duration-200 before:ease-in before:content-[''] hover:border-bg-lemon
              hover:fill-black   hover:before:top-0 lg:mt-14"
              >
                <span className='uppercase'>Download resume</span>

                <svg
                  width='15'
                  height='17'
                  viewBox='0 0 15 17'
                  fill='inherit'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7.27393 0C7.65362 0 7.96742 0.282154 8.01708 0.648229L8.02393 0.75L8.02393 15.75C8.02393 16.1642 7.68814 16.5 7.27393 16.5C6.89423 16.5 6.58043 16.2178 6.53077 15.8518L6.52393 15.75L6.52393 0.75C6.52393 0.335786 6.85971 0 7.27393 0Z' />
                  <path d='M12.767 9.17101C13.0593 8.87749 13.5342 8.87646 13.8277 9.16872C14.0945 9.43442 14.1196 9.85103 13.9024 10.1451L13.83 10.2294L7.80598 16.2794C7.5395 16.547 7.12138 16.5714 6.82731 16.3524L6.74308 16.2794L0.718085 10.2294C0.425799 9.93593 0.426782 9.46105 0.720281 9.16877C0.987098 8.90305 1.40381 8.87971 1.69697 9.09817L1.78094 9.17096L7.27481 14.687L12.767 9.17101Z' />
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* <div className='mt-12 grid grid-cols-1 gap-8 lg:mb-32 lg:mt-20 lg:grid-cols-3 lg:gap-12'>
          {roles.map((role) => (
            <div key={role.id}>
              <div className='pb-2 text-5xl font-medium leading-[1.2] text-[#D9D9D9] lg:text-8xl'>
                {role.id}
              </div>

              <p className='w-3/5 border-t border-text-gray pt-2 text-text-dark lg:w-full lg:border-t-2 lg:pt-6 lg:text-2xl'>
                {role.role}
              </p>
            </div>
          ))}
        </div> */}
      </section>

      {/* <section className='mt-14 border-t border-[#D9D9D9] pt-14 lg:mt-28'>
        <h2 className='text-4xl lg:max-w-4xl lg:text-[102px] lg:leading-[96px]'>
          Skills & Tools
        </h2>

        <div className='mt-11 flex gap-12 lg:gap-16'>
          <div>
            <p className='text-2xl leading-[1.2] text-text-gray lg:text-4xl'>
              Skills
            </p>
            <ul className='mt-6 lg:text-2xl'>
              <li>UX design</li>
              <li>Interaction design</li>
              <li>Wireframing</li>
              <li>Prototyping</li>
              <li>UX research</li>
              <li>Visual design</li>
              <li>Communication</li>
              <li>Design Thinking</li>
              <li>Branding</li>
            </ul>
          </div>

          <div>
            <p className='text-2xl leading-[1.2] text-text-gray lg:text-4xl'>
              Tools
            </p>
            <ul className='mt-6 lg:text-2xl'>
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>Adode Illustrator</li>
              <li>Adobe Photoshop</li>
              <li>Webflow</li>
              <li>Miro</li>
              <li>After effect</li>
              <li>Invision</li>
              <li>Trello</li>
            </ul>
          </div>
        </div>
      </section> */}

      <section className='mt-14 border-y border-[#D9D9D9] pt-14 lg:mt-28'>
        <h2 className='text-4xl lg:max-w-4xl lg:text-[102px] lg:leading-[96px]'>
          Interests
        </h2>

        <p className='mt-6 max-w-4xl lg:text-2xl'>
          When I’m not coding, I love to do and talk about other things like:​
        </p>

        <div className='mb-32 mt-32 flex justify-center'>
          <Hobbies />
        </div>
      </section>
    </div>
  )
}
