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
        .split("")
        .map(str => Number(str));

    let target = [];

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
