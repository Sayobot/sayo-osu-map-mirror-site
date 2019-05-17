export interface MapDetail {
    status: number;
    data: {
        approved: number;
        approved_date: number;
        artist: string;
        artistU: string;
        bid_data: MapDetailChild[];
        bids_amount: number;
        bpm: number;
        creator: string;
        creator_id: number;
        favourite_count: number;
        genre: number;
        language: number;
        last_update: number;
        local_update: number;
        preview: number;
        sid: number;
        source: string;
        storyboard: number;
        tags: string;
        title: string;
        titleU: string;
        video: number
    };
}

export interface MapDetailChild {
    AR: number;
    CS: number;
    HP: number;
    OD: number;
    aim: number;
    bid: number;
    circles: number;
    hit300windows: number;
    img: string;
    length: string;
    maxcombo: number;
    mode: number;
    passcount: number;
    playcount: number;
    pp: number;
    pp_acc: number;
    pp_aim: number;
    pp_speed: number;
    sliders: number;
    speed: number;
    spinners: number;
    star: number;
    strain_aim: string;
    strain_speed: string;
    version: string;
}

export interface PreMapList {
    endid: number;
    status: number;
    data: PreMap[];
}


export interface PreMap {
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
