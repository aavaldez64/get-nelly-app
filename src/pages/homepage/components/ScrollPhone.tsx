"use client";
import { PropsWithDictionary } from "@/interfaces";
import Image from "next/image";
import { useState } from "react";

export default function ScrollPhone({dict}: PropsWithDictionary) {
    
    const [active, setActive] = useState(0);
    const ScollsData = (dict?.scrollPhone || []).map((item, index) => ({
        ...item,
        imgSrc: `${index + 1}_scroll-phone.jpg`
    }));

  return (
    <section className="h-screen flex flex-col justify-center px-16">
        {
            ScollsData.map((item, index) => (
                <div key={index} className={`flex items-center ${active === index ? "" : "hidden"}`}>
                    <article className="w-[50%]">
                        <div>
                            <h2 className="text-3xl font-extrabold mb-2">{item.title}</h2>
                            <p className="font-medium text-md leading-8">{item.text}</p>
                        </div>
                    </article>
                    <article className="w-[50%]">
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
