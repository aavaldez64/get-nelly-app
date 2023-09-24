import { Languages } from '@/interfaces';
import { getDictionary } from './dictionaries';

import Introducing from '@/pages/homepage/components/Introducing';
import KnownFrom from '@/pages/homepage/components/KnownFrom';
import ScrollPhone from '@/pages/homepage/components/ScrollPhone';

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
      
    </main>
  )
}
