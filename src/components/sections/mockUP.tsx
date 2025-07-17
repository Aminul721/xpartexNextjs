import React from "react";
import { mockData } from './../../lib/fakeData/mockData';
import MockCard from "../ui/mockCard";
import MckBGImg from '../../../public/images/moke-bg.jpg'
import Link from "next/link";
const MockUP = () => {
  return (
    <>
        <section className="section section-mockup bg-cover bg-no-repeat py-20 lg:pe-28" style={{backgroundImage: `url(${MckBGImg.src})`}}>
            
            <div className="px-4 lg:px-0">
                <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-8">
                    <div className="max-w-[34rem]">
                        <div className="bg-sky-100 py-20 px-10">
                            <h2 className="text-h2 font-bold mb-2 text-center text-black uppercase">mockup</h2>
                            <p className="text-center"><Link href={'#'} className="text-black uppercase">ready to use</Link></p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                        {
                            mockData.map(({id, title, desc, desc2='', link=''}) =>{
                                return (
                                    <MockCard id={id} key={id} title={title} desc={desc} desc2={desc2} link={link}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default MockUP;
