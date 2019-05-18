import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

interface Clipboard {
    writeText(newClipText: string): Promise<void>;
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

    private write(str: string) {
        (navigator as NavigatorClipboard).clipboard
            .writeText(str)
            .then(() => {
                this.snackBar.open('已复制：', str, {
                    duration: 2000,
                });
            });
    }

    copy(content: string) {
        this.write(content);
    }
}
