import React from "react";
import Image from 'next/image'
interface PropsType {
  id: number | string;
  img: string | any;
  title: string;
}

const PortfolioCard:React.FC<PropsType> = ({id, img, title}) => {
    return (
        <>
            <div className="portfolio-card bg-white" key={id}>
                <div className="overflow-hidden">
                    <Image src={img} alt={title} className="w-full h-full object-cover" />
                </div>
                <div className="bg-white p-3 text-center">
                    <h6 className="text-h6 text-center dark:text-black">{title}</h6>
                </div>
            </div>
        </>
    );
};

export default PortfolioCard;
