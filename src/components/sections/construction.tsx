import Link from 'next/link'
import React from 'react'
import BrandBGImg from '../../../public/images/const-bg.jpg'

const Construction = () => {
  return (
    <>
      <section className="section section-construction bg-no-repeat bg-cover bg-right-top py-20 lg:py-36" style={{backgroundImage: `url(${BrandBGImg.src})`}}>
        <div className="container mx-auto">
            <div className='grid lg:grid-cols-2 grid-cols-1'>
                <div></div>
                <div className='construct-content'>
                  <h3 className='text-h3 dark:text-white font-bold mb-5'>Construction build project</h3>
                  <p className='mb-4'>middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                  <p className='mb-4'>Image from <Link href={'#'} className='underline'>freepik</Link> </p>
                  <Link href={'#'} className='btn px-5 py-3 border rounded hover:text-white hover:bg-yellow-600 inline-flex' aria-label='page link'>Contact us</Link>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Construction