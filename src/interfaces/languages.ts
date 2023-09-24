

export type Languages = "en" | "it" | "de";

export interface PropsWithLanguage {
    lang: Languages;
}
export interface PropsWithDictionary {
    dict: Dictionary;
}


// DICTIONARY
export interface Dictionary {
    header: Header;
    introducing: Introducing;
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
export interface Introducing {
    title: string;
    text: string;
    button: string;
}