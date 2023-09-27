"use client";

import { useEffect, useRef } from "react";
import style from "@/styles/header/header.module.css";
import { Dictionary, Languages } from "@/interfaces";
import { ResponsiveNav } from "./header/ResponsiveNav";

interface Props {
  dictionary: Dictionary;
  lang: Languages;
  bookDemo?: boolean;
}

export const Header = ({ dictionary, lang, bookDemo = false }: Props) => {
  const headerRef = useRef<HTMLElement>(null);
  useEffect(() => {

    let lastScrollY = 0;

    const handleScroll = () => {

      const currentScrollY = window.scrollY;

      if(currentScrollY <= 0) {
        headerRef.current?.classList.remove('header-collapsed');
      } else if (currentScrollY > lastScrollY && !headerRef.current?.classList.contains('header-collapsed')) {
        headerRef.current?.classList.add('header-collapsed');
      } else if (currentScrollY < lastScrollY && headerRef.current?.classList.contains('header-collapsed')) {
         headerRef.current?.classList.remove('header-collapsed'); 
      }

      lastScrollY = currentScrollY;

    }

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }

  }, []);

  return (
    <header ref={ headerRef } className={style.header}>
      <nav className="px-0 lg:px-24 min-h-[4rem] lg:min-h-[5.8rem] flex items-center">
          <ResponsiveNav header={ dictionary.header } lang={lang} bookDemo={bookDemo}/>
      </nav>
    </header>
  );
};
