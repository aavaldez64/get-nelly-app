import { Introducing } from "@/interfaces"
import Image from 'next/image';
import { IconWrapper } from '../../../components/icons/IconWrapper';

export default function Introducing ({ introducing }: {introducing: Introducing}) {
    
  return (
    <section className="bg-[#ffe] min-h-[40rem] flex flex-col lg:flex-row items-center justify-center relative">
        <div className="hidden lg:block absolute h-[90%] text-[#f1f6e9] bottom-0" >
            <IconWrapper />
        </div>
        <div className="relative lg:absolute flex overflow-x-hidden p-8 justify-center">
            <article className="flex flex-col w-[80%] md:w-[70%] lg:w-[46.5%] gap-8 items-center justify-center">
                <h1 className="font-[800] text-4xl text-center">{ introducing?.title || "" }</h1>
                <p className="text-center font-medium">{ introducing?.text || "" }</p>
                <a href="#" className="nelly-btn w-fit">{ introducing?.button || "" }</a>
            </article>
        </div>
        <div className="flex overflow-x-hidden ps-[6vw] items-center justify-center md:justify-between relative w-full">
            <article className="w-[16rem]">
                <Image
                    src="/assets/hero-iphone.jpg"
                    alt="Nelly iPhone"
                    width={250}
                    height={600}
                    className=" w-full"
                />
            </article>
            <article className="hidden md:block w-[45rem] relative left-[30vw]">
                <Image
                    src="/assets/hero-ipad-p-800.jpg"
                    alt="Nelly iPad"
                    width={400}
                    height={900}
                    className="w-full"
                />
            </article>
        </div>
    </section>
  )
}