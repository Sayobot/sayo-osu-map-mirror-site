import { Component, OnInit } from '@angular/core';
import { config } from './config';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    config: any;

    constructor() {
        this.config = config;
    }

    ngOnInit() {}
}
