export * from './svgIcon.utils';

/**
 * 将一个数字拆解成进制数组
 * @param num 一个数字
 * @param scale 进制
 */
export function numSeparate2SystemArr(
    num: number,
    scale: number = 2
): number[] {
    const numArr = num
        .toString(scale)
        .split('')
        .map((str) => Number(str));

    const target = [];

    const len = numArr.length;
    for (let i = 0; i < len; i++) {
        const el = numArr[i];
        target.push(el * scale ** (len - i - 1));
    }

    return target;
}

/**
 * 进制转换
 * @param n 数字
 * @param origin 原来的进制位
 * @param target 目标进制位
 */
export function coverNumberSystem(
    n: number,
    origin: number = 10,
    target: number = 2
) {
    let res: number;
    if (origin !== 10) {
        n = parseInt(n.toString(), origin);
    }
    res = Number(n.toString(target));
    return res;
}

/**
 * 通过插入a标签的方式下载
 * @param url 下载连接
 */
export function downloadFile(url: string) {
    const a = document.createElement('a');
    a.style.display = 'none';
    document.body.appendChild(a);
    a.href = url;
    a.click();
    document.body.removeChild(a);
}

/**
 * 将键值对列表转化为对象
 * @param arr 键值对列表
 */
export function fromEntries(arr: any) {
    const obj = {};
    arr.forEach((element) => {
        obj[element[0]] = element[1];
    });
    return obj;
}
