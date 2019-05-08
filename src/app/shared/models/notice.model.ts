export interface NoticeList {
    data: Notice[];
}


export interface Notice {
    content: string;
    img: string[];
    importance: number;
    summary: string;
}
