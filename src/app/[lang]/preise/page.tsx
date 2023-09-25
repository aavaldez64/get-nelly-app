import { Footer, Header } from "@/components/ui";
import { getDictionary } from "../dictionaries";
import { Languages } from "@/interfaces";
import { Advantages, Faq, OurPromise, Preises } from "@/components/pages";

interface Props {
  params: {
    lang: Languages;
  };
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