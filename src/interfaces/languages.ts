

export type Languages = "en" | "it" | "de";

export interface PropsWithLanguage {
    lang: Languages;
}


// DICTIONARY
export interface Dictionary {
    header: Header;
}
export interface Header {
    navLinks:    NavLink[];
    langOptions: LangOptions;
    PatiensLogin: string;
    BookDemo: string;
}
export interface LangOptions {
    current: string;
    options: string[];
}
export interface NavLink {
    text: string;
    href: string;
    link: boolean;
}
