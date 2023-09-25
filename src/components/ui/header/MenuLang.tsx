"use client";
import style from "@/styles/header/header.module.css";
import { useState } from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { LangOptions } from "@/interfaces";
import { languagesArr } from "@/dictionaries/languages";
import { usePathname } from "next/navigation";

export const MenuLang = ({ langOptions }: { langOptions: LangOptions }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const path = usePathname() ?? "";
  const paths = path.split("/");
  const restofUrl = paths.slice(2).join("/");
  return (
    <>
      <li className={`${style.buttonLang} hidden lg:block`}>
        <button
          className="flex items-center gap-1 uppercase"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <p>{langOptions.current}</p>
          <BsChevronDown />
        </button>
        <div className={`lang-options ${!menuOpen && "hidden"}`}>
          <ul className="flex flex-col">
            {langOptions.options.map((item, index) => (
              <li key={index}>
                <Link href={`/${item}/${restofUrl}`} className="flex items-center uppercase">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </li>
      <li className={`${style.buttonLang} lg:hidden`}>
        <div className="flex gap-3">
          {languagesArr.map((item, index) => (
            <Link
              key={index}
              href={`/${item}/${restofUrl}`}
              className={`${
                style.responsivelanguageLinks
              } flex items-center uppercase ${
                paths[1] === item ? "current-language" : ""
              }`}
            >
              {item}
            </Link>
          ))}
        </div>
      </li>
    </>
  );
};
