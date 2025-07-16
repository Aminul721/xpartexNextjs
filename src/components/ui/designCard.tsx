import React from 'react'
import Image from 'next/image'

const DesignCard = ({id, icon, title, desc, className=''}) => {
    return (
        <div className={`design-card py-8 px-3 ${className}`} key={id}>
            <div className='card-icon flex items-center justify-center w-[60px] h-[60px] rounded-full bg-white mb-5 mx-auto'>
                <Image src={icon} alt={title} />
            </div>
            <h6 className='text-h6 font-semibold text-center mb-4'>{title}</h6>
            <p className='text-center'>{desc}</p>
        </div>
    )
}

export default DesignCard