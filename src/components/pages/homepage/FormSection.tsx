import style from "@/styles/form-section.module.css"
import { ClientQuote, PropsWithDictionary } from "@/interfaces"
import { Fragment } from "react";
import { IconWrapper } from '../../icons/IconWrapper';

export const FormSection = ({dict}: PropsWithDictionary) => {
    const tags = dict?.form.tags || [];
  return (
    <section id="kontakt" className="bg-[#1a371c] relative">
        <div className="w-[70%] h-[60%] hidden md:block absolute bottom-0 text-[#2a4a2c] z-0">
            <IconWrapper />
        </div>
        <div className="flex flex-wrap px-6 py-16 md:px-8 md:py-32 text-[#ffe] relative z-40">
            <article className="w-full md:w-5/12 flex flex-col gap-6 md:gap-8 mb-8">
                <h2 className="font-extrabold text-3xl md:text-4xl">{parseQuote(dict?.form.title)}</h2>
                <p className="font-medium">{dict?.form.description || ""}</p>

                <ul className={ style.tags }>
                    {
                        tags.map((tag, index) => (
                            <li key={index} className="flex items-center gap-4">
                                <span className="font-medium">{tag}</span>
                            </li>
                        ))
                    }
                </ul>
            </article>
            <article className="w-full md:w-7/12">
                <form className={ style.form }>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-1/2 px-3">
                            <label htmlFor="first-name">
                                {dict?.form.firstName || ""}*
                            </label>
                            <input className="" id="first-name" type="text" />
                            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                        </div>
                        <div className="w-1/2 px-3">
                            <label htmlFor="last-name">
                                {dict?.form.lastName || ""}*
                            </label>
                            <input id="last-name" type="text" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label htmlFor="email">
                                {dict?.form.email || ""}*
                            </label>
                            <input id="email" type="email" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-1/3 px-3">
                            <label htmlFor="phone">
                                {dict?.form.phone || ""}*
                            </label>
                            <select>
                                <option>United States</option>
                            </select>
                            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                        </div>
                        <div className="flex items-end w-2/3 px-3">
                            <input id="phone" type="text" placeholder="+1" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label htmlFor="position">
                                {dict?.form.job || ""}*
                            </label>
                            <select id="position" >
                                <option>{dict?.form.defaultOption || ""}</option>
                            </select>
                        </div>
                    </div>
                    {
                        dict?.form.region && (
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label htmlFor="region">
                                        { dict.form.region }*
                                    </label>
                                    <select id="region" >
                                        <option>{dict?.form.defaultOption || ""}</option>
                                    </select>
                                </div>
                            </div>
                        )
                    }
                    {
                        dict?.form.TyC && (
                            <p className="mb-4 text-xs leading-6 font-medium text-[#ffffd2]">{ dict.form.TyC }</p>
                        )
                    }
                    {
                        dict?.form.numeroCelulare && (
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label htmlFor="numeroCelulare">
                                        { dict.form.numeroCelulare }*
                                    </label>
                                    <input id="numeroCelulare" type="tel" />
                                </div>
                            </div>
                        )
                    }

                    <button aria-label={ dict?.form.submit } className="nelly-btn text-black" type="button">{ dict?.form.submit }</button>

                </form>
            </article>
        </div>
    </section>
  )
}


const parseQuote = (quote: ClientQuote[]): JSX.Element => {
    const jsx = quote.map((word, index) => {
        if (word.strong) {
            return <span key={index} className="font-extrabold text-[#ffff9e]">{word.text}</span>
        } else {
            return <Fragment key={index}>{word.text}</Fragment>
        }
    });
    return <>{jsx}</>;
}