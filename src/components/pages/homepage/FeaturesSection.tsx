import { IconNelly } from "@/components/icons";
import { PropsWithDictionary } from "@/interfaces"
import style from "@/styles/features-section.module.css"
import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi";

export const FeaturesSection = ({dict}: PropsWithDictionary) => {
  const features = dict?.features?.list || [];

  return (
    <section className="bg-[#f1f6e9] relative flex items-center justify-center">
        <div className="w-6/12 h-6/12 absolute flex justify-center items-center text-[#ffe] z-0">
            <IconNelly />
        </div>
        <div className="px-4 md:px-8 py-16 lg:px-32 lg:py-32 z-10">
          <h2 className="text-[#68986b] text-base mb-5">{dict?.features?.title || ""}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {
              features.map((feature, index) => (
                <article key={index} className={ style.card }>
                    <Image 
                      src={`/assets/features/${feature.imgSrc}.svg`}
                      alt="1_feature"
                      width={80}
                      height={80}
                      className="mb-8"
                    />
                    <h3 className="font-extrabold text-lg lg:text-xl">{ feature.title }</h3>
                    <p className="font-medium text-sm lg:text-base leading-7">{ feature.text }</p>
                </article>
              ))
            }
          </div>

          <h2 className="text-[#68986b] text-base my-5">{dict?.features?.secondTitle.title || ""}</h2>
          <article className={`${style.card} flex flex-col md:flex-row gap-4 md:items-center mb-8`}>
              <Image 
                src={`/assets/features/${dict?.features?.secondTitle.featureImgSrc || ""}.svg`}
                alt="1_feature"
                width={80}
                height={80}
              />
              <div>
                <h3 className="font-extrabold text-lg lg:text-xl mb-2">{ dict?.features?.secondTitle.featureTitle || "" }</h3>
                <p className="font-medium text-sm lg:text-base leading-7">{ dict?.features?.secondTitle.featureText || "" }</p>
              </div>
          </article>

          <div className="w-full flex justify-center">
            <a aria-label={ dict?.features?.button || "" } href="#kontakt" className="nelly-btn-flex">
              <HiOutlineArrowRight />
              <p>{ dict?.features?.button || "" }</p>
            </a>
          </div>
        </div>
    </section>
  )
}
