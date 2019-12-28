import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DownloadService {
    constructor() {}

    // 文件下载功能
    downloadFile(url: string) {
        const a = document.createElement('a');
        a.style.display = 'none';
        document.body.appendChild(a);
        a.href = url;
        a.click();
        document.body.removeChild(a);
    }
}
