import './globals.css'
import type { Metadata } from 'next'
import { Languages } from '@/interfaces';
import { languages } from '@/dictionaries/languages';
import { redirect } from 'next/navigation';



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

  return (
    <html lang={lang}>
        {children}
    </html>
  )
}
