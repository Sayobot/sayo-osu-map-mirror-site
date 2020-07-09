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
 * 投喂列表 V2
 * ==============================================================
 * @param string 日期
 * @param expense_details 出账列表
 * @param income_details 进账列表
 */
export interface SupportList2 {
    title: string;
    expense_details: SupportExpense[];
    income_details: SupprtIncome[];
}

/**
 * ==============================================================
 * 出账详情 V2
 * ==============================================================
 * @param cost 花费
 * @param item 出账项
 * @param note 备注
 */
export interface SupportExpense {
    cost: number;
    item: string;
    note: string;
}

/**
 * ==============================================================
 * 入账详情 V2
 * ==============================================================
 * @param from 来源
 * @param msg 捐助备注
 * @param name 姓名
 * @param rmb rmb
 * @param time 日期
 */
export interface SupprtIncome {
    from: string;
    msg: string;
    name: string;
    rmb: number;
    time: string;
}
