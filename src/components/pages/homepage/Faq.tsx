import { PropsWithDictionary } from "@/interfaces"
import { FaqList } from './faq/FaqList';

export const Faq = ({dict}: PropsWithDictionary) => {
    const faqList = dict?.faq?.faqs || [];
  return (
    <section className="bg-[#f1f6e9] py-16 md:py-24 px-8 lg:p-32">
        <h2 className="font-extrabold text-xl md:text-3xl lg:text-4xl mb-8 md:mb-16 lg:mb-24">{ dict?.faq.title || "" }</h2>
        <FaqList list={faqList}/>
    </section>
  )
}
