import { Metadata } from "next";
import { getDictionary } from "../dictionaries";
import { Footer, Header } from "@/components/navigation";
import { Advantages, Faq, OurPromise, Preises } from "@/components/pages";
import { Languages } from "@/interfaces";

interface Props {
  params: {
    lang: Languages;
  };
}
export async function generateMetadata({ params: { lang = "en" } }: Props): Promise<Metadata> {
  const dict = await getDictionary(lang);

  return {
    title: dict.pages.preises.metadata.title
  }
}


export default async function PreisePage({ params: { lang = "en" }}: Props) {
  const dict = await getDictionary(lang);
  return (
    <>
    <Header dictionary={dict} lang={lang} />
    
    <main>

      <Preises dict={dict} />
      <Advantages dict={dict} />
      <Faq dict={dict} />
      <OurPromise dict={dict} />

    </main>

    <Footer dict={dict} />
    </>
  );
}