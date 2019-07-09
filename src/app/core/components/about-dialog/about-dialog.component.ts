import { Component, OnInit, Inject } from '@angular/core';

@Component({
    selector: 'app-about-dialog',
    templateUrl: './about-dialog.component.html',
    styleUrls: ['./about-dialog.component.scss']
})
export class AboutDialogComponent implements OnInit {
    domain: string;
    constructor(@Inject('BASE_CONFIG') private config, ) { }

    ngOnInit() {
        this.domain = this.config.domain;
    }

}
