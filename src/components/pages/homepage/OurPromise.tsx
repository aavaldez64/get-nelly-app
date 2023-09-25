import { PropsWithDictionary } from "@/interfaces"
import Image from "next/image"

export const OurPromise = ({dict}: PropsWithDictionary) => {
  return (
    <section className="flex flex-col justify-center items-center py-12 md:py-16 bg-[#ffff9e] gap-6 lg:gap-16">
        <article>
          <h2 className="font-extrabold text-sm uppercase text-center">{dict?.ourPromise || ""}</h2>
        </article>
        <article className="flex flex-col md:flex-row gap-8 md:gap-10 items-center justify-center">
          <Image 
            src="/assets/promises/1_promise.png"
            alt="1_promise"
            width={200}
            height={50}
            className="w-fit h-[2.75rem]"
          />
          <Image 
            src="/assets/promises/2_promise.png"
            alt="2_promise"
            width={200}
            height={50}
            className="w-fit h-[2.75rem]"
          />
          <Image 
            src="/assets/promises/3_promise.png"
            alt="3_promise"
            width={200}
            height={50}
            className="w-fit h-[2.75rem]"
          />
        </article>
    </section>
  )
}
