"use client";
import style from "@/styles/faq.module.css"
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FAQItem } from "@/interfaces";

export const FaqList = ({list}: {list: FAQItem[]}) => {
    const [expanded, setExpanded] = useState<number[]>([]);
    const touchCard = (index: number) => {
        if (expanded.includes(index)) {
            setExpanded(expanded.filter(i => i !== index))
        } else {
            setExpanded([...expanded, index])
        }
    }
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
        {
            list.map((faq, index) => (
                <article 
                    key={index} 
                    className={ style.card }
                    onClick={ () => touchCard(index) }
                >
                    <h3 className="font-extrabold text-sm sm:text-base lg:text-lg">{ faq.question }</h3>
                    <button aria-label="expand" type="button" className={ expanded.includes(index) ? style.toClose : ""}>
                        <AiOutlinePlus />
                    </button>
                    <p className={`${expanded.includes(index) ? "mt-4" : "h-0"}`}>{ faq.answer }</p>
                </article>
            ))
        }
    </div>
  )
}
