import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CreateImage from "../../../public/images/1.png";

const CreateWebsite = () => {
    return (
        <>
            <section className='section section-create-web py-14 md:pt-48 mb-8 lg:mb-32'>
                <div className="container mx-auto">
                    <div className="create-content flex flex-col md:flex-row items-center">
                        {/* Text Content */}
                        <div className="bg-white px-[2rem] md:pe-[9rem] py-[3rem] md:py-[5rem] md:w-2/3 space-y-6">
                            <h1 className="text-4xl font-bold text-gray-800">We Create Websites</h1>
                            <p className="text-gray-600">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
                            </p>
                            <p className="text-sm text-gray-500">Image from Freepik</p>
                            
                            <div className="pt-4">
                                <button className="px-6 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors">
                                VIEW PORTFOLIO
                                </button>
                            </div>
                        </div>
        
                        {/* Image Placeholder - Replace with your actual image */}
                        <div className="w-full md:w-1/3 md:-ms-[7rem] md:-mt-[2rem]">
                            <div className="w-full flex items-center justify-center overflow-hidden">
                                <Image src={CreateImage} className='w-full h-full md:w-auto md:h-auto object-cover' alt=''/>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </section>
        </>
    )
}

export default CreateWebsite