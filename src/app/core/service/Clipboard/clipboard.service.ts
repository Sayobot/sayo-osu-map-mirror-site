import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

interface Clipboard {
    writeText(newClipText: string): Promise<void>;
    // readText(): Promise<void>;
}

interface NavigatorClipboard {
    readonly clipboard?: Clipboard;
}

interface Navigator extends NavigatorClipboard { }

@Injectable({
    providedIn: 'root'
})
export class ClipboardService {

    constructor(private snackBar: MatSnackBar) { }

    write(str: string) {
        (navigator as NavigatorClipboard).clipboard
            .writeText(str)
            .then(() => {
                this.snackBar.open('已复制分享链接至剪贴板：', str, {
                    duration: 2000,
                });
            });
    }

    read() {
        // (navigator as NavigatorClipboard).clipboard
        //     .readText()
        //     .then((res) => {
        //         console.log(res);
        //     });
    }
}
