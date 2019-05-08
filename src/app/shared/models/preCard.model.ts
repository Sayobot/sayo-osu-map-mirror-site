export interface PreCardList {
    endid: number;
    status: number;
    data: PreCard[];
}


export interface PreCard {
    approved: number;
    artist: string;
    artistU: string;
    creator: string;
    favourite_count: number;
    lastupdate: number;
    modes: number;
    order: number;
    sid: number;
    title: string;
    titleU: string;
}
