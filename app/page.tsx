import Image from 'next/image'

export default function Home() {
  return (
    <div className='text-gray px-[100px] py-[271px]'>
      <div className=''>
        <div className='text-[102px]'>
          <h1>Product Designer &</h1>
          <h1>No-code Developer</h1>
        </div>
        <div className='flex gap-[84px]'>
          <div className='text-[24px]'>
            <p>Hi there!👋🏽 I'm Abdulazeez , a product designer skilled </p>
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
      </div>
    </div>
  )
}
