import style from "@/styles/how-works.module.css"
import { HiOutlineArrowRight } from "react-icons/hi"
import { IconNelly } from "@/components/icons";
import { PropsWithDictionary } from "@/interfaces"

export const HowWorks = ({dict}: PropsWithDictionary) => {
    const listData = dict?.howWorks?.list || [];
  return (
    <section id="so-funktionierts" className="flex flex-col py-12 px-6md:px-16 lg:py-24 lg:px-32 items-center w-full bg-white">
        <div className="hidden lg:flex w-full justify-center mb-8">
            <div className="w-5/12"></div>
            <div className="w-full lg:w-5/12">
                <h2 className="font-extrabold text-4xl lg:text-start">
                    { dict?.howWorks?.title || "" }
                </h2>
            </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-center">
            <article className="w-full lg:w-6/12 flex justify-center items-center px-6 lg:px-12">
                <video
                    className="rounded-[2rem]" 
                    autoPlay 
                    muted 
                    loop
                >
                    <source src="/assets/how2-transcode.mp4" type="video/mp4"/>
                    <source src="/assets/how2-transcode.webm" type="video/webm"/>
                </video>
            </article>
            <article className="w-full lg:w-6/12 px-8 lg:px-0">
                <div className="w-full block lg:hidden">
                    <h2 className="font-extrabold text-2xl my-6">
                        { dict?.howWorks?.title || "" }
                    </h2>
                </div>
                <ul className={style.list}>
                    {
                        listData.map((item, index) => (
                            <li
                                key={index}
                                className={style.listItem}
                            >
                                <div className={style.listNumber}>
                                    <span>{index + 1}</span>
                                </div>
                                <h3>{ item.title }</h3>
                                <p>{ item.text }</p>
                            </li>
                        ))
                    }
                    <li
                        className={style.listItem}
                    >
                        <div>
                            <IconNelly />
                        </div>
                        <a href="#" aria-label={ dict?.howWorks?.button || "" }>
                            <p>{ dict?.howWorks?.button || "" }</p>
                            <HiOutlineArrowRight />
                        </a>
                    </li>
                </ul>
            </article>
        </div>
    </section>
  )
}
