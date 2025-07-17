import React from "react";
import { weDoList } from './../../lib/fakeData/weDoFakeData';
import WeDoList from "../ui/weDoList";

const WeDo = () => {
    return (
        <>
            <section className="section section-we-do bg-black py-32">
                <div className="container mx-auto">
                    <h2 className="text-h2 md:text-center font-bold text-yellow-500 mb-4 lg:mb-8">What We Do</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {
                            weDoList.map(({id, title, listMenu}) => {
                                return (
                                    <WeDoList id={id} key={id} title={title} listMenu={listMenu}/>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default WeDo;
