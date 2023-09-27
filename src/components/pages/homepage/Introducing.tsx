"use client";

import style from "@/styles/introducing.module.css";
import Image from 'next/image';
import { IconWrapper } from '@/components/icons/IconWrapper';
import { Introducing as IntroducingProps } from "@/interfaces"
import { useEffect, useRef, useState } from "react";

export const Introducing = ({ introducing }: {introducing: IntroducingProps}) => {
    const sectionRef = useRef(null)
    const [actionStyles, setActionStyles] = useState({
        mainContent: style.mainContentInitial,
        phone: style.phoneInitial,
        tablet: style.tabletInitial,
        wrapper: style.wrapperInitial,
    })
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting) {
                // Animar Elementos
                setActionStyles({
                    mainContent: style.mainContentObserved,
                    phone: style.phoneObserved,
                    tablet: style.tabletObserved,
                    wrapper: style.wrapperObserved,
                })
                // Desconectar observer
              observer.disconnect();  
            } 
        });
        observer.observe(sectionRef.current!);
      
          return () => observer.disconnect();
    }, [])
    
    
  return (
    <section id="home-start" ref={ sectionRef } className={ style.section } >
        <div className={`${style.wrapper} ${actionStyles.wrapper}`}>
            <IconWrapper />
        </div>
        <div className={`${style.mainContent} ${actionStyles.mainContent}`}>
            <article className="flex flex-col w-[80%] md:w-[70%] lg:w-[60%] gap-8 items-center justify-center">
                <h1 className="font-[800] text-4xl text-center">{ introducing?.title || "" }</h1>
                <p className="text-center font-medium">{ introducing?.text || "" }</p>
                <a aria-label={ introducing?.button || "" } href="#kontakt" className="nelly-btn w-fit">{ introducing?.button || "" }</a>
            </article>
        </div>
        <div className="flex overflow-hidden ps-[6vw] items-center justify-center md:justify-between relative w-full">
            <article className={`${style.phone} ${actionStyles.phone}`}>
                <Image
                    src="/assets/hero-iphone.jpg"
                    alt="Nelly iPhone"
                    width={508}
                    height={943}
                    className=" w-full h-auto"
                />
            </article>
            <article className={`${style.tablet} ${actionStyles.tablet}`}>
                <Image
                    src="/assets/hero-ipad-p-800.jpg"
                    alt="Nelly iPad"
                    width={800}
                    height={606}
                    className="w-full h-auto"
                />
            </article>
        </div>
    </section>
  )
}