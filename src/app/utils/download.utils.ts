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
