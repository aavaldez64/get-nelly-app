

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
    knownFrom: string;
    scrollPhone: ScrollPhone[];
    compatible: string;
    howWorks: HowWorks;
    advantages: Advantages;
    features: Features;
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
export interface ScrollPhone {
    title: string;
    text: string;
}
export interface HowWorks {
    title: string;
    list: HowWorksList[];
    button: string;
}
export interface HowWorksList {
    title: string;
    text: string;
}
export interface Advantages {
    title: string;
    list: AdvantagesList[];
}
export interface AdvantagesList {
    unit: string;
    value: number,
    text: string;
}

export interface Features {
    title: string;
    list: ListFeatures[];
    secondTitle: SecondFeatures;
    button: string;
}
export interface ListFeatures {
    title: string;
    text: string;
    imgSrc: string;
}
export interface SecondFeatures {
    title: string;
    featureTitle: string;
    featureText: string;
    featureImgSrc: string
}