"use client";
import { useState } from "react";
import Image from "next/image";
import { PropsWithDictionary } from "@/interfaces";

export const ScrollPhone = ({dict}: PropsWithDictionary) => {
    
    const [active, setActive] = useState(0);
    const ScollsData = (dict?.scrollPhone || []).map((item, index) => ({
        ...item,
        imgSrc: `${index + 1}_scroll-phone.jpg`
    }));

  return (
    <section className="h-screen flex flex-col justify-center px-4 mg:px-8 lg:px-16">
        {
            ScollsData.map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center ${active === index ? "" : "hidden"}`}>
                    <article className="w-full md:w-[50%] order-2 md:order-1">
                        <div>
                            <h2 className="text-xl lg:text-3xl font-extrabold mb-2">{index+1}. {item.title}</h2>
                            <p className="font-medium text-[.9rem] lg:text-base leading-6 lg:leading-8">{item.text}</p>
                        </div>
                    </article>
                    <article className="w-full md:w-[50%] order-1 md:order-2">
                        <Image 
                            src={`/assets/scroll-phone/${item.imgSrc}`} 
                            alt={item.imgSrc}
                            width={800}
                            height={800}
                            className="w-full h-auto"
                        />
                    </article>
                </div>
            ))
        }
    </section>
  )
}
