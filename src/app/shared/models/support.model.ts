export interface SupportList {
    data: Supports[];
}

export interface Supports {
    link: string;
    order: number;
    title: string;
}

export interface Support {
    data: SupportChild[];
}

export interface SupportChild {
    id: string;
    money: number;
    order: number;
    time: string;
    type: number;
}
