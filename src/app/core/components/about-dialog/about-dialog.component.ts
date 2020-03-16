import { Component, OnInit } from '@angular/core';
import { config } from './about-config';

@Component({
    selector: 'app-about-dialog',
    templateUrl: './about-dialog.component.html'
})
export class AboutDialogComponent implements OnInit {
    config: any;

    constructor() {
        this.config = config;
    }

    ngOnInit() {}
}
