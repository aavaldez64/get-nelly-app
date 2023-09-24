import { Languages } from '@/interfaces';
import { Introducing } from '@/pages/homepage/components/Introducing';

interface Props {
  params: {
    lang: Languages
  },
}

export default function HomePage({ params: {lang = "en"} }: Props) {
  return (
    <main>
      <Introducing lang={lang}/>
    </main>
  )
}
