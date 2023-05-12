import Image from 'next/image'

export default function Home() {
  return (
    <div className='text-gray px-[100px] py-[271px] bg-background'>
      <div className=''>
        <div className='text-[102px]'>
          <h1>Product Designer and</h1>
          <h1>No-code Developer</h1>
        </div>
        <div className='flex gap-[84px]'>
          <div className='text-[24px]'>
            <p>Hi there! I am Abdulazeez , a product designer skilled </p>
            <p>in user experience and visual design — I strive</p>
            <p>to create intuitive and engaging experiences that</p>
            <p>excites users and businesses.</p>
          </div>
          <div className=' '>
            <div className=' flex '>
              <button className='flex py-[15px] px-[24px] border-text-dark gap-2 mt-10 border rounded-[50px]'>
                <p>LEARN MORE</p>
                <div className='mt-1'>
                  <Image
                    height={14}
                    width={16}
                    src={'assets/arrow-right.svg'}
                    alt='right arrow image'
                  ></Image>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className='mt-[224px]'>
          <h1 className='text-[102px]'>Selected Projects</h1>
          <div className='mt-[64px]'>
            <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              <Image
                height={594}
                width={459}
                src={'assets/paypen-image.svg'}
                alt='twitter link'
              ></Image>
              <div className='px-8 py-8'>
                <div className='flex justify-between'>
                  <h1 className='text-[32px]'>Paypen</h1>
                  <button>
                    <Image
                      height={14}
                      width={16}
                      src={'assets/arrow-right.svg'}
                      alt='right arrow image'
                    ></Image>
                  </button>
                </div>
                <p className='text-[#828282] py-4'>
                  A web app built solely for the purspose of employees pension
                  payment
                </p>
              </div>
            </div>
            <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              <Image
                height={594}
                width={459}
                src={'assets/paypen-image.svg'}
                alt='twitter link'
              ></Image>
              <div className='px-8 py-8'>
                <div className='flex justify-between'>
                  <h1 className='text-[32px]'>Paypen</h1>
                  <button>
                    <Image
                      height={14}
                      width={16}
                      src={'assets/arrow-right.svg'}
                      alt='right arrow image'
                    ></Image>
                  </button>
                </div>
                <p className='text-[#828282] py-4'>
                  A web app built solely for the purspose of employees pension
                  payment
                </p>
              </div>
            </div>
            <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              <Image
                height={594}
                width={459}
                src={'assets/paypen-image.svg'}
                alt='twitter link'
              ></Image>
              <div className='px-8 py-8'>
                <div className='flex justify-between'>
                  <h1 className='text-[32px]'>Paypen</h1>
                  <button>
                    <Image
                      height={14}
                      width={16}
                      src={'assets/arrow-right.svg'}
                      alt='right arrow image'
                    ></Image>
                  </button>
                </div>
                <p className='text-[#828282] py-4'>
                  A web app built solely for the purspose of employees pension
                  payment
                </p>
              </div>
            </div>
            <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              <Image
                height={594}
                width={459}
                src={'assets/paypen-image.svg'}
                alt='twitter link'
              ></Image>
              <div className='px-8 py-8'>
                <div className='flex justify-between'>
                  <h1 className='text-[32px]'>Paypen</h1>
                  <button>
                    <Image
                      height={14}
                      width={16}
                      src={'assets/arrow-right.svg'}
                      alt='right arrow image'
                    ></Image>
                  </button>
                </div>
                <p className='text-[#828282] py-4'>
                  A web app built solely for the purspose of employees pension
                  payment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
