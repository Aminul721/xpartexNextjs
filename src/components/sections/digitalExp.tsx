import Link from 'next/link'
import React from 'react'
import DigitalBGImg from '../../../public/images/digital-bg.jpg'

const DigitalExp = () => {
  return (
    <>
        <section className='section section-digital bg-cover bg-no-repeat py-36 pb-28' style={{backgroundImage: `url(${DigitalBGImg.src})`}}>
            <div className="container mx-auto">
                <div className='bg-white py-10 px-8 max-w-[30rem]'>
                    <h2 className='text-h2 font-bold text-black mb-3'>Crafting digital experience</h2>
                    <p className='text-black mb-3'>s been the industry's standard dummy text ever since the 1500s, when an unkno</p>
                    <p className='text-black mb-3'>Image from <Link href={'#'} className='underline'>freepik</Link> </p>
                    <Link href={'#'} className='btn px-6 py-2 border rounded-lg text-white bg-black hover:bg-yellow-600 inline-flex' aria-label='page link'>Contact us</Link>
                </div>
            </div>
        </section>
    </>
  )
}

export default DigitalExp