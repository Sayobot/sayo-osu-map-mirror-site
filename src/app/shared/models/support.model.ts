/**
 * ==============================================================
 * 投喂月份列表
 * ==============================================================
 * @param title 日期标签
 * @param order 排序标识
 * @param link 对应月份详情的链接
 * @example {
 *   "title": "2019-12 最后更新时间 2019-12-19 23:59",
 *   "order": 24,
 *   "link": "https://api.sayobot.cn/static/splist/201912"
 * }
 */
export interface Supports {
    link: string;
    order: number;
    title: string;
    detail?: SupportDetails[];
}

/**
 * ==============================================================
 * 单月投喂详情列表
 * ==============================================================
 * @param id 投喂者标识
 * @param money 投喂金额
 * @param order 投喂排序
 * @param time 投喂时间
 * @param type 投喂来源
 * @example {
 *   "id": "xxx",
 *   "type": 0,
 *   "time": "2019-12-02 21:19",
 *   "order": 1,
 *   "money":5
 * }
 */
export interface SupportDetails {
    id: number;
    money: number;
    order: number;
    time: Date;
    type: number;
}

/**
 * ==============================================================
 * 每月目标值
 * ==============================================================
 * @param target 当月目标值
 * @param total 当月投喂值
 * @param link 投喂链接
 * @param importance 重要程度
 * @param date 更新时间
 * @example {
 *   "target": 1000,
 *   "total": 217.97,
 *   "link": "2019-12-02 21:19",
 *   "importance": 1,
 *   "date": "2019-12-20"
 * }
 */
export interface FeedTarget {
    target: number;
    total: number;
    link: string;
    importance: number;
    data: Date;
}
