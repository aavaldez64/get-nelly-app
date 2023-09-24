import '../globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Header } from '@/components/ui/Header';
import { Languages } from '@/interfaces';
import { languages } from '@/dictionaries/languages';
import { redirect } from 'next/navigation';

const montserrat = Montserrat({ subsets: ['latin'] })

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

export default function RootLayout({ children, params: {lang = "en"} }: Props) {

  if (languages[lang] === undefined) {
    redirect("/en")
  }
  return (
    <html lang={lang}>
      <body className={montserrat.className}>
        <Header lang={lang}/>
        {children}
      </body>
    </html>
  )
}
