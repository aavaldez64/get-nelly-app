import { PropsWithLanguage } from "@/interfaces"
import Image from 'next/image';
import { IconWrapper } from '../../../components/icons/IconWrapper';

export const Introducing = ({lang}: PropsWithLanguage) => {
  return (
    <section className="bg-[#ffe]">
        {/* <div className="absolute h-full w-full bg-[#ffe] text-[#E8F0E6] z-[-1]" >
            <IconWrapper />
        </div> */}
        <div className="flex overflow-x-hidden p-8 ps-[6vw] items-center justify-between absolute w-full">
            <article className="w-[16rem]">
                <Image
                    src="/assets/hero-iphone.jpg"
                    alt="Nelly iPhone"
                    width={250}
                    height={600}
                    className=" w-full"
                />
            </article>
            <article className="w-[49rem] relative left-[30vw] z-40">
                <Image
                    src="/assets/hero-ipad-p-800.jpg"
                    alt="Nelly iPad"
                    width={400}
                    height={900}
                    className="w-full"
                />
            </article>
        </div>
        <div className="flex relative overflow-x-hidden p-8 justify-center min-h-[40rem] h-full py-28">
            <div className="absolute h-[90%] text-[#f1f6e9] bottom-0" >
                <IconWrapper />
            </div>
            <article className="flex flex-col w-[46.5%] gap-8 items-center z-50">
                <h1 className="font-[800] text-4xl text-center">Introducing efficient practice management: Nelly Solutions.</h1>
                <p className="text-center font-medium">Put an end to paper chaos: With Nelly, digital documents and invoices in no time at all.</p>
                <a href="#" className="nelly-btn w-fit">Learn More</a>
            </article>
        </div>
    </section>
  )
}
