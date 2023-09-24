import style from "@/styles/header/header.module.css";

import { PropsWithLanguage } from "@/interfaces";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { ResponsiveNav } from "./header/ResponsiveNav";

interface Props extends PropsWithLanguage {}

export const Header = async ({ lang }: Props) => {
  const { header } = await getDictionary(lang);

  return (
    <header className={style.header}>
      <nav className="px-0 lg:px-10 min-h-[5.8rem] flex items-center">
          <ResponsiveNav header={header} />
      </nav>
    </header>
  );
};
