import 'server-only'
import { Dictionary, Languages } from '@/interfaces'

type PromiseDictionary = Promise<Dictionary>;
 
const dictionaries = {
  en: () => import('../../dictionaries/en.json').then((module) => module.default) as PromiseDictionary,
  de: () => import('../../dictionaries/de.json').then((module) => module.default) as PromiseDictionary,
  it: () => import('../../dictionaries/it.json').then((module) => module.default) as PromiseDictionary,
}
 
export const getDictionary = async (locale: Languages): Promise<Dictionary> => dictionaries[locale]()