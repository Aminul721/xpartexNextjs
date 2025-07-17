"use client"
import Image from "next/image";
import React from "react";
import { useState } from 'react'
import LogoImg from '../../public/images/logo.png';
import Link from "next/link";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <>
            <header className="header dark:bg-white">
                <div className="container mx-auto">
                    <div className="header-area flex justify-between items-center gap-1 py-3 relative">
                        <div className="logo">
                            <Link href={'/'}>
                                <Image src={LogoImg} width={150}  alt="logo" />
                            </Link>
                        </div>

                        {/* Hamburger Icon */}
                        <div className="w-auto">
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="text-gray-700 focus:outline-none"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    {menuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                        
                        {/* Menu Links */}
                        <div className={`absolute top-[5rem] right-0 z-20 w-full lg:max-w-[20rem] ${menuOpen ? 'flex' : 'hidden'}`}>
                            <div className={`flex-col flex gap-4 lg:gap-8 dark:bg-white w-full border border-solid dark:text-black px-3 py-5`}>
                                <Link href="#" className="block py-2 lg:py-0">Home</Link>
                                <Link href="#" className="block py-2 lg:py-0">About</Link>
                                <Link href="#" className="block py-2 lg:py-0">Services</Link>
                                <Link href="#" className="block py-2 lg:py-0">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
