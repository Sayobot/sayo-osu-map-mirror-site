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
        video: number;
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

/**
 * 预览列表
 * @param endid 最后的ID
 * @param status 状态
 * @param data 预览数组
 */
export interface PreMapList {
    endid: number;
    status: number;
    data: PreMap[];
}

/**
 * 预览图
 * @param approved 已承认
 * @param artist 作者名
 * @param artistU 作者英文名
 * @param creator 创作者
 * @param favourite_count 点赞数
 * @param lastupdate 最后更新时间
 * @param modes 模式
 * @param order 排序
 * @param sid sid
 * @param title 标题
 * @param titleU 英文标题
 */
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
