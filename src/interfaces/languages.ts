import { Pages } from "./pages/languages";


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
    benefits: Benefits;
    clients: Clients;
    ourPromise: string;
    faq: FAQ;
    form: Form;
    footer: Footer;
    pages: Pages;
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

export interface Benefits {
    title: string;
    list: string[];
}

export interface Clients {
    title: string;
    list: ClientItem[];
}
export interface ClientItem {
    resource: ClientResource,
    quote: ClientQuote[];
    name: string;
    position: string;
    image: string;
}
export type ClientQuote = {text: string, strong: boolean};
export type ClientResource = 
| {
    video: true,
    src: {type: "", src: string}[]
}
| {
    video: false,
    src: string
}

export interface FAQ {
    title: string;
    faqs: FAQItem[];
}
export interface FAQItem {
    question: string;
    answer: string;
}

export interface Form {
    title: ClientQuote[];
    description: string;
    tags: string[];
    firstName: string;
    lastName: string;
    phone: string;
    job: string;
    email: string;
    region: string;
    defaultOption: string;
    TyC: string;
    numeroCelulare: string;
    submit: string;
    error: string;
}

export interface Footer {
    learnMore: {
        title: string;
        links: FooterLinks[];
    },
    contact: {
        title: string;
        links: FooterLinks[];
    },
    copyright: string;
}

interface FooterLinks {
    text: string;
    href: string;
    navLink: boolean;
}