/**
 * 解决 剪贴板 的兼容性问题
 */

interface Clipboard {
    writeText(newClipText: string): Promise<void>;
}

interface NavigatorClipboard {
    readonly clipboard?: Clipboard;
}

// tslint:disable-next-line: no-empty-interface
interface Navigator extends NavigatorClipboard {}

export function copy2Clipboard(info: any): Promise<any> {
    return (<NavigatorClipboard>navigator).clipboard.writeText(info);
}
