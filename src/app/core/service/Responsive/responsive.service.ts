import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ResponsiveService {
    cols: number;
    doc: Document;

    constructor() {
        this.doc = document;
        this.setCols();
    }

    setCols() {
        const width = this.doc.documentElement.clientWidth;
        if (width > 1600) {
            this.cols = 4;
        } else if (width > 1300) {
            this.cols = 3;
        } else if (width > 1000) {
            this.cols = 2;
        } else {
            this.cols = 1;
        }
    }
}
