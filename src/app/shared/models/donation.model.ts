/**
 * ==============================================================
 * 捐助信息
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
export interface DonationInfo {
    target: number;
    total: number;
    link: string;
    importance: number;
    date: Date;
}
