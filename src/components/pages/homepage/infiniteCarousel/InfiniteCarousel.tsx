"use client"
import style from "@/styles/utils/infinite-carousel.module.css"
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

interface Props {
    items: {
        src: string;
        alt: string;
    }[];
}
export const InfiniteCarousel = ({items}: Props) => {

    const [position, setPosition] = useState(0);
    const carouselRef = useRef(null);

    const handleScroll = useCallback(
      () => {
        const container = carouselRef.current as unknown as HTMLElement;
        setPosition(pos => {
            if(pos >= items.length - 6) {
                // Volver al inicio
                return 0;  
            } else {
                return pos + 1; 
            }
        });
        
        container.scrollLeft = 0
      },
      [carouselRef, items.length],
    )
    

    useEffect(() => {
        const container = carouselRef.current as unknown as HTMLElement;
        container.scrollTo({
            left: container.scrollWidth,
            behavior: 'instant',
        })
        handleScroll();
    }, [handleScroll])
    
    
  return (
    <ul ref={carouselRef} onScroll={handleScroll} className={ style.carousel }>
        {
        items.map((image, index) => (
            <li key={index}>
                <Image
                    src={`/assets/known-from/${image.src}`} 
                    alt={image.alt} 
                    width={100}
                    height={40}
                    // className="w-fit h-[2rem]"
                    className="w-auto h-[2rem]"
                />
            </li>
        ))
        }
        <li></li>
    </ul>
  )
}
