"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
    value: number;
    unit: string;
}
export const AdvantagesObserver = ({value, unit}: Props) => {

    const [count, setCount] = useState(Math.round(value/3));
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting) {
              // Animar contador
              const interval = setInterval(() => {
                setCount(prev => {
                    if(prev >= value) {
                        clearInterval(interval);
                        return value;
                    }
                    return prev + 1;
                })
              }, 1800/value);
              // Desconectar observer
              observer.disconnect();  
            } 
          });
      
          observer.observe(counterRef.current!);
      
          return () => observer.disconnect();
    }, [value])
    
  return (
    <h3 ref={counterRef} className="font-extrabold text-4xl">{count}{unit}</h3>
  )
}
