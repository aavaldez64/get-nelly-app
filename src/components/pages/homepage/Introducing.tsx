import Image from 'next/image';
import { IconWrapper } from '@/components/icons/IconWrapper';
import { Introducing as IntroducingProps } from "@/interfaces"

export const Introducing = ({ introducing }: {introducing: IntroducingProps}) => {
    
  return (
    <section className="bg-[#ffe] min-h-[40rem] flex flex-col lg:flex-row items-center justify-center relative">
        <div className="hidden lg:block absolute text-[#f1f6e9] bottom-0" style={{height: "90%"}}>
            <IconWrapper />
        </div>
        <div className="relative lg:absolute flex overflow-x-hidden p-8 justify-center z-50">
            <article className="flex flex-col w-[80%] md:w-[70%] lg:w-[46.5%] gap-8 items-center justify-center">
                <h1 className="font-[800] text-4xl text-center">{ introducing?.title || "" }</h1>
                <p className="text-center font-medium">{ introducing?.text || "" }</p>
                <a aria-label={ introducing?.button || "" } href="#kontakt" className="nelly-btn w-fit">{ introducing?.button || "" }</a>
            </article>
        </div>
        <div className="flex overflow-x-hidden ps-[6vw] items-center justify-center md:justify-between relative w-full">
            <article className="w-[16rem]">
                <Image
                    src="/assets/hero-iphone.jpg"
                    alt="Nelly iPhone"
                    width={508}
                    height={943}
                    className=" w-full h-auto"
                />
            </article>
            <article className="hidden md:block w-[45rem] relative left-[30vw]">
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