import React from "react";
import TitleStyle from "../ui/titleStyle";
import { portfolioCard } from './../../lib/fakeData/portfolioData';
import PortfolioCard from "../ui/portfolioCard";

const Portfolio = () => {
    return (
        <>
            <section className="section section-portfolio mb-32">
                <div className="container mx-auto">
                    <TitleStyle 
                        title='Portfolio'
                        desc='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point'
                    />
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                        {
                            portfolioCard.map(({id, img, title}, index) => {
                                return (
                                    <PortfolioCard key={id} img={img} title={title}/>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Portfolio;
