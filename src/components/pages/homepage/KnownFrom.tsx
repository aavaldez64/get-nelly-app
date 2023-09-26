import { PropsWithDictionary } from "@/interfaces"
import { imageSourcesKnowFrom as imageSources } from "@/constants";
import { InfiniteCarousel } from "./infiniteCarousel/InfiniteCarousel"

export const KnownFrom = ({dict}: PropsWithDictionary) => {
  return (
    <section className="flex flex-col bg-[#E8F0E6] py-16">
      <h2 className="uppercase text-center mb-8 text-[#68986b] font-extrabold text-sm">{ dict?.knownFrom || "" }</h2>
      <article className="w-full">
        <InfiniteCarousel items={ imageSources }/>
      </article>

    </section>
  )
}