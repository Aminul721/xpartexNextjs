import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CreateImage from "../../../public/images/1.png";

const CreateWebsite = () => {
    return (
        <>
            <section className='section section-create-web py-14 mb-32'>
                <div className="container mx-auto">
                    <div className='relative lg:pt-44 grid grid-cols-2'>
                        <div className='create-content bg-white px-[2rem] pe-[20rem] py-[4rem]'>
                            <h2 className='text-h2 dark:text-black mb-4 lg:mb-5'>What is Lorem Ipsum?</h2>
                            <p className='mb-3 lg:mb-4 dark:text-black'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                            <p className='mb-3 lg:mb-4 dark:text-black'>Image from <Link href={'#'} className='no-underline' aria-label='page link'>freepik</Link></p>
                        </div>

                        <div className='create-img w-auto h-auto top-8 right-0 z-10'>
                            <Image src={CreateImage} className='w-auto h-auto object-cover' alt=''/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CreateWebsite