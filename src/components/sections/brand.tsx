import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import BrandImg_1 from '../../../public/images/brands/1.jpg'
import BrandImg_2 from '../../../public/images/brands/2.jpg'
import BrandImg_3 from '../../../public/images/brands/3.jpg'

const Brand = () => {
  return (
    <>
        <section className="section section-brand mb-32">
            <div className="container mx-auto">
                <div className='relative grid lg:grid-cols-2 grid-cols-1 items-center gap-2'>
                    <div className='brand-left grid grid-cols-1 gap-2'>
                        <div className="brand-img overflow-hidden">
                            <Image src={BrandImg_1} className='w-full h-full object-cover' alt='brand img'/>
                        </div>
                        <div className="brand-img overflow-hidden">
                            <Image src={BrandImg_2} className='w-full h-full object-cover' alt='brand img'/>
                        </div>
                    </div>
                    <div className="brand-right overflow-hidden">
                        <Image src={BrandImg_3} className='w-full h-full max-h-[45rem] object-cover' alt='brand img' />
                    </div>

                    <div className='brand-content bg-black py-8 px-3 absolute w-full max-w-[30rem] min-h-fit top-0 right-0 bottom-0 left-0 z-10 m-auto'>
                        <h3 className='text-h3 font-bold text-center mb-3'>Brand Values</h3>
                        <p className='text-center mb-3'>Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, ac</p>
                        <p className='text-center mb-3'>Image from <Link href={'#'} className='underline inline-flex'>freepik</Link> </p>
                        <p className='text-center'><Link href={'#'} className='btn px-5 py-3 border rounded hover:text-white hover:bg-yellow-600 inline-flex uppercase' aria-label='page link'>learn more</Link></p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Brand