import Image from 'next/image'

const Paypen = () => {
  return (
    <div>
      <div className='relative h-[294px] w-full lg:h-[calc(100vh-88px)]'>
        <Image
          alt='Paypen Case Study Image'
          src='/assets/paypen-case-study-1.svg'
          fill
          className='object-cover object-bottom'
        />
      </div>

      <section className='mt-14 px-4 lg:mt-[118px]'>
        <div className='mx-auto max-w-4xl'>
          <div className='flex flex-col justify-between gap-6 lg:flex-row lg:border-b lg:border-[#CCCCCC] lg:pb-4 lg:text-2xl'>
            <div className='flex flex-col'>
              <span className='font-medium text-text-gray'>Year</span>
              <span>2022</span>
            </div>

            <div className='flex flex-col'>
              <span className='font-medium text-text-gray'>Role</span>
              <span>UI design, Interaction design</span>
            </div>

            <div className='flex flex-col'>
              <span className='font-medium text-text-gray'>Website</span>

              <div className='flex items-center gap-2'>
                <span>Live website</span>

                <a href=''>
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
                </a>
              </div>
            </div>
          </div>

          <h1 className='mt-14 text-2xl font-medium lg:mt-24 lg:text-4xl'>
            Overview
          </h1>

          <p className='mt-2 lg:text-2xl'>
            PayPen is an application built to tackle the remittance and
            reconciliation issues currently faced in the Nigerian pension
            industry today. It ensures that all pension remittances made come
            with corresponding schedules to enable the relevant pension
            operators do the needful to credit the retirement savings accounts
            of the concerned Nigerian employees.
          </p>

          <h2 className='mt-[100px] text-2xl font-medium lg:text-4xl'>
            Problem
          </h2>
          <p className='mt-2 lg:text-2xl lg:leading-9'>
            In Nigeria today, all Organizations with three or more employees
            must make pension remittances on behalf of their staff to give them
            a means of livelihood when they retire. However, there is a problem
            that has plagued the industry since inception which is
            reconciliation. <br /> <br /> Payments made should come with a list
            containing the names of the employees as well as their retirement
            savings account numbers to allow for easy processing. <br /> <br />
            But some employers do not comply with this instruction, they make
            payments without providing the schedule needed to process the
            payments, this makes the funds useless for the pension operators as
            well as the employees because the funds are not invested and there
            are no returns for all parties involved.
          </p>

          <h2 className='mt-[100px] text-2xl font-medium lg:text-4xl'>Goal</h2>
          <p className='mt-2 lg:text-2xl lg:leading-9'>
            PayPen provides an electronic platform where Employers can make
            payments seamlessly while ensuring that a schedule is provided and
            transmitted to the pension operators for onward processing.
          </p>

          <h2 className='mt-[100px] text-2xl font-medium lg:text-4xl'>Role</h2>
          <p className='lg:text-2xl lg:leading-9'>
            Visual Design and Interaction: Designed the Wireframes, HiFidelity
            prototypes and System style guide.
          </p>

          <h2 className='mt-[100px] text-2xl font-medium lg:text-4xl'>
            Sketches
          </h2>
          <p className='lg:text-2xl lg:leading-9'>
            I used the user research and information architecture created my the
            product team to brainstorm and sketch down by ideas
          </p>
        </div>

        <div className='mt-6 grid grid-cols-3 gap-1.5 lg:mt-20 lg:gap-5'>
          <div className='relative h-[84px] w-full lg:h-80'>
            <Image
              alt='Sketch images'
              src='/assets/sketch-1.svg'
              fill
              className='object-cover'
            />
          </div>
          <div className='relative h-[84px] w-full lg:h-80'>
            <Image
              alt='Sketch images'
              src='/assets/sketch-1.svg'
              fill
              className='object-cover'
            />
          </div>
          <div className='relative h-[84px] w-full lg:h-80'>
            <Image
              alt='Sketch images'
              src='/assets/sketch-1.svg'
              fill
              className='object-cover'
            />
          </div>
          <div className='relative h-[84px] w-full lg:h-80'>
            <Image
              alt='Sketch images'
              src='/assets/sketch-1.svg'
              fill
              className='object-cover'
            />
          </div>
          <div className='relative h-[84px] w-full lg:h-80'>
            <Image
              alt='Sketch images'
              src='/assets/sketch-1.svg'
              fill
              className='object-cover'
            />
          </div>
          <div className='relative h-[84px] w-full lg:h-80'>
            <Image
              alt='Sketch images'
              src='/assets/sketch-1.svg'
              fill
              className='object-cover'
            />
          </div>
        </div>

        <div className='mx-auto max-w-4xl'>
          <h2 className='mt-[100px] text-2xl font-medium lg:text-4xl'>
            Wireframes
          </h2>
          <p className='lg:text-2xl lg:leading-9'>
            After sketching down by ideas I moved to creating low-fidelity
            wireframes. They were created to gain a better and clearer
            understanding of the design. This approach made the iteration
            process more efficient and made it easier to communicate with the
            team to explore more opportunities.
          </p>
        </div>

        <div className='mt-6 grid grid-cols-2 gap-1.5 lg:mt-20 lg:gap-5'>
          <div className='relative h-[84px] w-full lg:h-80'>
            <Image
              alt='Sketch images'
              src='/assets/sketch-1.svg'
              fill
              className='object-cover'
            />
          </div>
          <div className='relative h-[84px] w-full lg:h-80'>
            <Image
              alt='Sketch images'
              src='/assets/sketch-1.svg'
              fill
              className='object-cover'
            />
          </div>
          <div className='relative h-[84px] w-full lg:h-80'>
            <Image
              alt='Sketch images'
              src='/assets/sketch-1.svg'
              fill
              className='object-cover'
            />
          </div>
          <div className='relative h-[84px] w-full lg:h-80'>
            <Image
              alt='Sketch images'
              src='/assets/sketch-1.svg'
              fill
              className='object-cover'
            />
          </div>
        </div>

        <div className='mx-auto max-w-4xl'>
          <h2 className='mt-[100px] text-2xl font-medium lg:text-4xl'>
            System Style Guide
          </h2>
          <p className='lg:text-2xl lg:leading-9'>
            The system style guide consist of the typography, colors, buttons,
            forms, icons and illustrations
          </p>
        </div>

        <div className='relative mt-6 h-48 w-full'>
          <Image
            alt='Sketch images'
            src='/assets/sketch-1.svg'
            fill
            className='object-cover'
          />
        </div>

        <div className='mx-auto max-w-4xl'>
          <h2 className='mt-10 text-2xl font-medium lg:text-4xl'>
            Hi-Fidelity Design
          </h2>
          <p className='lg:text-2xl lg:leading-9'>
            The final design, where I created the high-fidelity screens
            following several iterations and rounds of usability testing.
          </p>
        </div>

        <div className='relative mt-6 h-64 w-full'>
          <Image
            alt='Sketch images'
            src='/assets/paypen-image.svg'
            fill
            className='object-cover'
          />
        </div>

        <div className='mx-auto max-w-4xl'>
          <h2 className='mt-10 text-2xl font-medium lg:text-4xl'>
            Landing page
          </h2>
          <p className='lg:text-2xl lg:leading-9'>
            I designed a responsive landing page and several screens on the
            website
          </p>
        </div>

        <div className='relative mt-6 h-64 w-full'>
          <Image
            alt='Sketch images'
            src='/assets/paypen-image.svg'
            fill
            className='object-cover'
          />
        </div>
        <div className='relative h-96 w-full'>
          <Image
            alt='Sketch images'
            src='/assets/paypen-image.svg'
            fill
            className='object-cover'
          />
        </div>

        <div className='mx-auto max-w-4xl'>
          <h2 className='mt-10 text-2xl font-medium lg:text-4xl'>
            Signup & Login
          </h2>
          <p className='lg:text-2xl lg:leading-9'>
            Employers signup/login with their emials and password.
          </p>
        </div>

        <div className='relative mt-6 h-64 w-full'>
          <Image
            alt='Sketch images'
            src='/assets/paypen-image.svg'
            fill
            className='object-cover'
          />
        </div>

        <div className='mx-auto max-w-4xl'>
          <h2 className='mt-10 text-2xl font-medium lg:text-4xl'>
            Employer Module
          </h2>
          <p className='lg:text-2xl lg:leading-9'>
            Employers upload schedules to make payments to their employees.
          </p>
        </div>

        <div className='relative mt-6 h-96 w-full'>
          <Image
            alt='Sketch images'
            src='/assets/paypen-image.svg'
            fill
            className='object-cover'
          />
        </div>

        <div className='mx-auto max-w-4xl'>
          <h2 className='mt-10 text-2xl font-medium lg:text-4xl'>
            PFCs Module
          </h2>
          <p className='lg:text-2xl lg:leading-9'>
            Pension Fund Custodians (PFCs) are in charge of maintaining the
            security of the assets held in trust for the benefit of the
            contributors.
          </p>
        </div>

        <div className='relative mt-6 h-56 w-full'>
          <Image
            alt='Sketch images'
            src='/assets/paypen-image.svg'
            fill
            className='object-cover'
          />
        </div>

        <div className='mx-auto max-w-4xl'>
          <h2 className='mt-10 text-2xl font-medium lg:text-4xl'>
            PFAs Module
          </h2>
          <p className='lg:text-2xl lg:leading-9'>
            They are responsible for opening Retirement Savings Accounts (RSA)
            for employees, managing the assets of pension funds, paying
            retirement benefits, and keeping track of any business dealings
            involving the pension funds they are in charge of.
          </p>
        </div>

        <div className='relative mt-6 h-56 w-full'>
          <Image
            alt='Sketch images'
            src='/assets/paypen-image.svg'
            fill
            className='object-cover'
          />
        </div>

        <div className='mx-auto max-w-4xl'>
          <h2 className='mt-10 text-2xl font-medium lg:text-4xl'>
            Admin Module
          </h2>
          <p className='lg:text-2xl lg:leading-9'>
            The Admin is in charge multitudinous activities like, registering of
            employers, PFAs, PFCs, and Insurace companies
          </p>
        </div>

        <div className='relative mt-6 h-56 w-full'>
          <Image
            alt='Sketch images'
            src='/assets/paypen-image.svg'
            fill
            className='object-cover'
          />
        </div>
      </section>
    </div>
  )
}

export default Paypen
