/**
 * ==============================================================
 * 公告
 * ==============================================================
 * @param title 标题
 * @param user_id 发布者
 * @param date 发布时间
 * @param content 发布内容
 * @param importance 优先级
 * @param img 图片列表
 * @example {
 *   "title": "破案了",
 *   "user_id": "_BlackC",
 *   "date": "2019-12-10 :",
 *   "content": "今天早上一个不规范的请求……把跳转程序搞炸了……来自Google bot",
 *   "importance": 0,
 *   "img": [
 *      "https://api.sayobot.cn/static/img/gb1.png",
 *      "https://api.sayobot.cn/static/img/gb2.png"
 *    ]
 * }
 */
export interface Notice {
    title: string;
    user_id: string;
    date: Date;
    content: string;
    importance: number;
    img: string[];
}

/**
 * ==============================================================
 * 新闻
 * ==============================================================
 * @param summary 简介
 * @param content 内容
 * @param importance 优先级
 * @param img 图片对象数组
 * @example {
 *   "summary": "这里是新闻",
 *   "content": "test test",
 *   "importance": 0,
 *   "img": [{"url": "https://sayobot.cn/pic/7700bc71d6b39bc49d94a313cd87ea7e.png"}]
 * }
 */
export interface NewPaper {
    summary: string;
    content: string;
    importance: number;
    img: ImgObj[];
}

/**
 * ==============================================================
 * 图片对象
 * ==============================================================
 * @param url 图片链接
 * @example {
 *   "url": "https://sayobot.cn/pic/7700bc71d6b39bc49d94a313cd87ea7e.png"
 * }
 */
export interface ImgObj {
    url: string;
}
