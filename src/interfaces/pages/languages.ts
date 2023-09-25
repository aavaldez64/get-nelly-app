
export interface Pages {
    preises: Preises;
}

export interface Preises {
    title:            string;
    cards:            PreisesCard[];
    firstAdditional:  PreisesAdditional;
    secondAdditional: PreisesAdditional;
    textSmall:        string;
}

export interface PreisesCard {
    title:      string;
    subtitle:   string;
    text:       string;
    list:       string[];
    button:     string;
    additional: boolean;
}

export interface PreisesAdditional {
    title: string;
    text:  string;
}
