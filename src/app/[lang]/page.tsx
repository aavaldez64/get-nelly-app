import { Languages } from '@/interfaces';
import { getDictionary } from './dictionaries';
import { 
  Advantages,
  Benefits,
  Compatible, 
  FeaturesSection, 
  HowWorks,
  Introducing, 
  KnownFrom, 
  ScrollPhone, 
 } from '@/components/pages/homepage';

interface Props {
  params: {
    lang: Languages
  },
}

export default async function HomePage({ params: {lang = "en"} }: Props) {
  const dict = await getDictionary(lang);
  return (
    <main>
      <Introducing introducing={dict.introducing}/>
      <KnownFrom dict={dict}/>

      {/* // TODO: SCROLL PHONE */}
      <ScrollPhone dict={dict}/>

      <Compatible title={dict.compatible}/>
      <HowWorks dict={dict}/>
      <Advantages dict={dict}/>
      <FeaturesSection dict={dict}/>
      <Benefits dict={dict}/>
      
    </main>
  )
}
