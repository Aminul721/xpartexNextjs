import Image from "next/image";
import React from "react";
import LogoImg from '../../public/images/logo.png';
import Hamburger from './../../public/icons/hamburger';
import Link from "next/link";

const Header = () => {
    return (
        <>
            <header className="header dark:bg-white">
                <div className="container mx-auto">
                    <div className="header-area flex justify-between items-center gap-1 py-3">
                        <div className="logo">
                            <Link href={'/'}>
                                <Image src={LogoImg} width={150}  alt="logo" />
                            </Link>
                        </div>

                        <button className="text-black">
                            <Hamburger/>
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
