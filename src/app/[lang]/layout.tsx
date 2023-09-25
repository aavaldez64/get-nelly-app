import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { languages } from '@/dictionaries/languages';
import { redirect } from 'next/navigation';
import { getDictionary } from './dictionaries';
import { Footer, Header } from '@/components/ui';
import { Languages } from '@/interfaces';

const montserrat = Montserrat({ subsets: ['latin'] })

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'de' }, { lang: 'it' }]
}

export const metadata: Metadata = {
  title: 'Nelly',
  description: 'App created by Aaron Valdez using Next.js',
}

interface Props {
  children: React.ReactNode,
  params: {
    lang: Languages
  },
}

export default async function RootLayout({ children, params: {lang = "en"} }: Props) {
  if (languages[lang] === undefined) {
    redirect("/en")
  }

  const dict = await getDictionary(lang);
  return (
      <body className={montserrat.className}>
        {children}
      </body>
  )
}
