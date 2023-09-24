import Image from "next/image";
import { imageSourcesKnowFrom as imageSources } from "@/constants";
import { PropsWithDictionary } from "@/interfaces"

export const KnownFrom = ({dict}: PropsWithDictionary) => {
  return (
    <section className="flex flex-col bg-[#E8F0E6] py-16">
      <h2 className="uppercase text-center mb-8 text-[#68986b] font-extrabold text-sm">{ dict?.knownFrom || "" }</h2>
      <article className="w-full overflow-x-hidden">
        <ul className="flex gap-16 w-max">
          {
            imageSources.map((image, index) => (
              <li key={index}>
                <Image 
                  src={`/assets/known-from/${image.src}`} 
                  alt={image.alt} 
                  width={100}
                  height={40}
                  // className="w-fit h-[2rem]"
                  className="w-auto h-[2rem]"
                />
              </li>
            ))
          }
          <li></li>
        </ul>
      </article>

    </section>
  )
}