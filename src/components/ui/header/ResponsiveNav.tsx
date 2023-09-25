"use client";
import style from '@/styles/header/header.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { MenuLang } from './MenuLang';
import type { Header as IHeader, Languages } from '@/interfaces';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

interface Props {
    header: IHeader;
    lang: Languages;
    bookDemo: boolean;
}

export const ResponsiveNav = ({ header, lang, bookDemo }: Props) => {
    const { langOptions, navLinks } = header;
    const path = usePathname();
    const pathSplitted = path.split('/');
    const currentPath = pathSplitted[2];

    const [navOpen, setNavOpen] = useState(false);
    return (
        <div className="flex flex-wrap w-full justify-between lg:justify-start items-center mx-auto max-w-screen-xl relative">
            <div className='w-full lg:w-auto flex justify-between z-10 bg-[#E8F0E6]'>
                <Link href={`/${lang}`} className="flex items-center ps-4 py-1 lg:ps-0 lg:py-0">
                    <Image
                        src="/assets/getnelly-logo.svg"
                        alt="Nelly"
                        width={50}
                        height={50}
                    />
                </Link>
                <div className="flex items-center lg:order-2 pe-4 py-1 lg:pe-0 lg:py-0">
                    <button 
                        type="button" 
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden"
                        onClick={() => setNavOpen(prev => !prev)}
                    >
                        <span className="sr-only">Open main menu</span>
                        {
                            navOpen
                            ? (<AiOutlineClose className="w-[2rem] h-[2rem] text-black" />)
                            : (<AiOutlineMenu className="w-[2rem] h-[2rem] text-black" />)
                        }
                    </button>
                </div>
            </div>
            <div 
                className={`${style.navResponsive} ${!navOpen ? style.closed : style.open} items-center w-full lg:flex lg:w-auto lg:order-1 lg:justify-between lg:flex-1 lg:px-8`}
            >
                <ul className="flex flex-col mt-4 font-medium lg:flex-row gap-5 lg:gap-8 lg:mt-0">
                    {
                        navLinks.map((item, index) => (
                            <li key={index}>
                                {
                                    item.link
                                    ? (<Link className={currentPath === item.href ? "text-[#67986B]" : ""} href={`/${lang}/${item.href}`}>{item.text}</Link>)
                                    : (<a href={pathSplitted.length > 2 ? `/${lang}${item.href}` : item.href}>{item.text}</a>)
                                }
                            </li>
                        ))
                    }
                    <MenuLang langOptions={langOptions} />
                </ul>
                <ul className="flex flex-col mt-4 font-medium lg:flex-row gap-6 lg:gap-8 lg:mt-0">
                    <li>
                        <Link href="/en">{ header.PatiensLogin }</Link>
                    </li>
                    {
                        bookDemo && (
                            <li className='w-[90%] lg:w-auto'>
                                <Link href="/en" className="nelly-btn">{ header.BookDemo }</Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}
