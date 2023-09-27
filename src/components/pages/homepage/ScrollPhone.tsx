"use client";
import style from "@/styles/scroll-section.module.css"
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PropsWithDictionary } from "@/interfaces";

export const ScrollPhone = ({dict}: PropsWithDictionary) => {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollsContainer = useRef(null);
    const [snapPoints, setSnapPoints] = useState<number[]>([]);


    const ScrollsData = (dict?.scrollPhone || []).map((item, index) => ({
        ...item,
        imgSrc: `${index + 1}_scroll-phone.jpg`
    }));
    useEffect(() => {
        const screenHeight = window.innerHeight;
        const firstSnapPointElement = document.querySelector<HTMLElement>(".spacing");
        if (firstSnapPointElement) {
            const firstSnapPoint = firstSnapPointElement.offsetTop;
            setSnapPoints([firstSnapPoint, firstSnapPoint + screenHeight, firstSnapPoint + screenHeight * 2]);
        }
    }, []);
    useEffect(() => {
        if (snapPoints.length !== 3) return;
        const container = scrollsContainer.current as unknown as HTMLElement; 
        const handleOnScroll = () => {

            const currentY = window.scrollY;
            let toScroll;
            if (currentY >= snapPoints[0] && currentY < snapPoints[1]) {
                if (currentIndex === 0) return;
                setCurrentIndex(0);
                toScroll = document.getElementById("scrollItem0")?.offsetTop;
            }
            if (currentY >= snapPoints[1] && currentY < snapPoints[2]) {
                if (currentIndex === 1) return;
                setCurrentIndex(1);
                toScroll = document.getElementById("scrollItem1")?.offsetTop;
            }
            if ( currentY >= snapPoints[2]) {
                if (currentIndex === 2) return;
                setCurrentIndex(2);
                toScroll = document.getElementById("scrollItem2")?.offsetTop;
            }
            if (toScroll || toScroll === 0) {
                container.scrollTo({
                    top: toScroll, 
                    behavior: "smooth"
                })
            }

        };

        window.addEventListener('scroll', handleOnScroll);
        return () => window.removeEventListener('scroll', handleOnScroll);
    }, [snapPoints, currentIndex])
    

  return (
    <>
        <div className="bg-[#ffe] h-[10vh] md:h-[20vh] xl:h-[10vh] w-full spacing"></div>
        <div className="w-full bg-[#ffe] flex justify-center">
            <section className="h-[380vh] md:h-[350vh] flex flex-col px-4 mg:px-8 lg:px-8 xl:px-24 max-w-[1600px]">
                <div className={`flex flex-col items-center md:justify-start sticky top-[22vh] sm:top-[18vh] xl:top-[8vh]`}>
                    <ul className={style.navDashes}>
                        <li className={ style[currentIndex === 0 ? "dashActive" : "dashInactive"] }></li>
                        <li className={ style[currentIndex === 1 ? "dashActive" : "dashInactive"] }></li>
                        <li className={ style[currentIndex === 2 ? "dashActive" : "dashInactive"] }></li>
                    </ul>
                    <div id="scrolls_container" ref={scrollsContainer} className={`h-[70vh] overflow-hidden ${style.responsiveScrollText}`}>
                        {
                            ScrollsData.map((item, index) => (
                                <div key={index} id={"scrollItem"+index} className="flex flex-col md:flex-row items-center h-[70vh] lg:h-[unset]">
                                    <article className="w-full md:w-[50%] order-1 py-16 lg:py-0 pe-8 lg:pe-16 relative">
                                        <div className="ms-12 sm:ms-8">
                                            <h2 className="text-lg sm:text-xl lg:text-3xl font-extrabold mb-2">{item?.title}</h2>
                                            <p className="font-medium text-[.8rem] sm:text-[.9rem] lg:text-base leading-5 sm:leading-6 lg:leading-8">{item?.text}</p>
                                        </div>
                                    </article>
                                    
                                    <article className="lg:w-[50%] order-2 opacity-0">
                                        <Image 
                                            src={`/assets/scroll-phone/${item?.imgSrc}`} 
                                            alt={item?.imgSrc}
                                            width={800}
                                            height={800}
                                            className="w-full h-auto"
                                        />
                                    </article>
    
                                </div>
                            ))
                        }

                    </div>
                    <article className="w-full bg-[#ffe] md:bg-[none] md:w-[50%] xl:w-[45%] absolute flex justify-center md:block right-0 top-[2vh] sm:top-[-5vh] md:top-[10vh] lg:top-0 xl:top-[8vh]">
                        <Image 
                            src={`/assets/scroll-phone/${ScrollsData[currentIndex]?.imgSrc}`} 
                            alt={ScrollsData[currentIndex]?.imgSrc}
                            width={800}
                            height={800}
                            className="w-full sm:w-[70%] md:w-full h-auto"
                        />
                    </article>
                </div>
            </section>
        </div>

        <div className="bg-[#ffe] h-[10vh] md:h-[20vh] xl:h-[30vh] w-full spacing"></div>
    </>
  )
}