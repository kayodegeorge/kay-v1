export default function StartAProject() {
  return (
    <section className='mb-24 mt-24 lg:mb-52 lg:mt-52'>
      <h2 className='mx-auto max-w-[18rem] text-center text-5xl leading-tight lg:max-w-xl lg:text-[102px] lg:leading-none'>
        Want to start a project
      </h2>

      <div className='mt-8 flex justify-center'>
        <a href='mailto:gkayode75@gmail.com'>
          <div
            className="relative flex w-fit items-center gap-3 overflow-hidden rounded-full border border-black px-[24px] py-[14px] before:absolute before:bottom-0 before:left-0 before:right-0 before:top-full before:-z-50 before:bg-bg-lemon before:transition-[top] before:duration-200 before:ease-in before:content-[''] hover:border-bg-lemon 
          hover:fill-black hover:before:top-0"
          >
            <span className='uppercase leading-[1.2]'>Let&apos;s talk</span>

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
          </div>
        </a>
      </div>
    </section>
  )
}
