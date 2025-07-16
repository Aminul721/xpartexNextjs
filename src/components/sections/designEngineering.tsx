import React from "react";
import TitleStyle from "../ui/titleStyle";
import { designCard } from './../../lib/fakeData/designCard';
import DesignCard from "../ui/designCard";

const DesignEngineering = () => {
    return (
        <>
            <section className="section section-design mb-32">
                <div className="container mx-auto">
                    <TitleStyle
                        title= "Lorem Ipsum is Lorem Ipsum?"
                        desc= "Lorem Ipsum is simply dummy text of the pri industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
                    />
                    <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-[50px]">
                        {
                            designCard.map(({ id, icon, title, desc }, index) => {
                                const cardClasses = [
                                    '',
                                    'bg-white',
                                    '',
                                    'bg-yellow-400',
                                    ];
                                const extraClass = `card_${index+1} ${cardClasses[index]}` || '';
                                return (
                                    <DesignCard id={id} key={id} icon={icon} title={title} desc={desc} className={`${extraClass} rounded`} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
};

export default DesignEngineering;
