import { Component, OnInit, Inject } from '@angular/core';
import { META } from './update.meta';

@Component({
    selector: 'update-log',
    templateUrl: './update-log.component.html'
})
export class UpdateLogComponent implements OnInit {
    updataList: any;
    domain: string;

    constructor(@Inject('BASE_CONFIG') private config) {}

    ngOnInit() {
        this.updataList = META;
        this.domain = this.config.domain;
    }
}
