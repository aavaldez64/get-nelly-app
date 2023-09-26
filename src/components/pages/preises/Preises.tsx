import style from "@/styles/preises.module.css"
import { PropsWithDictionary } from "@/interfaces"
import { IconNelly } from '../../icons/IconNelly';
import { BsCheck2 } from "react-icons/bs";
import { HiOutlineArrowRight } from "react-icons/hi";
import { PiFilePlusThin, PiUserCirclePlusThin, PiBankThin } from "react-icons/pi";

export const Preises = ({dict}: PropsWithDictionary) => {
    if (!dict) return (<></>);
    const { title, firstAdditional, secondAdditional, textSmall, cards } = dict.pages.preises;
    const preisesList = cards;
    const icons = [
        <IconNelly key="IconNelly" />,
        <PiBankThin key="BankThin" className="text-[2.5rem] text-[#68986b]"/>
    ];
  return (
    <section className="bg-[#E8F0E6] px-4 md:px-8 py-16 md:py-28 lg:py-32 flex flex-col items-center">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold w-[80%] lg:w-[50%] md:leading-[3.5rem] mb-8 lg:mb-12">{ title }</h1>
        <section className={ style.section }>
            {
                preisesList.map((item, index) => (
                    <article key={index} className="flex flex-col gap-6">
                        <div className="flex gap-4">
                            <div className="w-[5rem] p-5 rounded-3xl bg-[#e2edd0] text-[#68986b] flex items-center justify-center">
                                { icons[index] || <></> }
                            </div>
                            <div>
                                <h3 className="text-xs font-extrabold text-[#68986b] mb-2">{ item.subtitle }</h3>
                                <h2 className="text-2xl lg:text-3xl font-extrabold">{ item.title }</h2>
                            </div>
                        </div>
                        <p className="font-extrabold text-sm lg:text-base leading-7">{ item.text }</p>
                        <ul>
                            {
                                item.list.map((listItem, listIndex) => (
                                    <li key={listIndex} className="flex items-center gap-2 mb-4">
                                        <BsCheck2 className="text-xl text-[#68986b]"/>
                                        <p className="font-medium text-sm lg:text-base">{ listItem }</p>
                                    </li>
                                ))
                            }
                        </ul>
                        <a aria-label={ item.button } href="#" className="nelly-btn-flex w-fit">
                            <p>{ item.button }</p>
                            <HiOutlineArrowRight className="text-xl" />
                        </a>
                        {
                            item.additional && (
                                <>
                                    <div className={style.additionalCard}>
                                        <PiUserCirclePlusThin className="text-xl text-[#68986b]" />
                                        <div>
                                            <h4>{ firstAdditional.title }</h4>
                                            <p>{ firstAdditional.text }</p>
                                        </div>
                                    </div>
                                    <div className={style.additionalCard}>
                                        <PiFilePlusThin className="text-xl text-[#68986b]" />
                                        <div>
                                            <h4>{ secondAdditional.title }</h4>
                                            <p>{ secondAdditional.text }</p>
                                        </div>
                                    </div>
                                    <p className="text-xs font-normal">{ textSmall }</p>
                                </>
                            )
                        }
                    </article>
                ))
            }
        </section>
    </section>
  )
}
