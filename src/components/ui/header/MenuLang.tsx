"use client";
import { useState } from 'react';
import Link from 'next/link';
import { BsChevronDown } from 'react-icons/bs'
import { LangOptions } from '@/interfaces';


export const MenuLang = ({langOptions}: {langOptions: LangOptions}) => {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
        <button 
            className='flex items-center gap-1 uppercase'
            onClick={() => setMenuOpen(!menuOpen)}
        >
            <p>{ langOptions.current }</p>
            <BsChevronDown />
        </button>
        <div className={`lang-options ${!menuOpen && "hidden"}`}>
            <ul className='flex flex-col'>
                {
                    langOptions.options.map((item, index) => (
                        <li key={index}>
                            <Link href={`/${item}`} className='flex items-center uppercase'>
                                { item }
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    </>
  )
}
