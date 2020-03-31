/**
 * ==============================================================
 * 广澳
 * ==============================================================
 * @param title 标题
 * @param img1000x150 轮播图
 * @param uri 导航链接
 * @example {
 *   "title": "测试标题",
 *   "img1000x150": "https://osu.sayobot.cn/ad/ad1.jpg",
 *   "uri": "https://item.taobao.com/item.htm?id=579397618209",
 * }
 */
export interface Ad {
    title: string;
    img1000x150: string;
    uri: string;
}
