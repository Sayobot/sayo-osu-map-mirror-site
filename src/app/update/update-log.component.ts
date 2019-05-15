import { Component, OnInit } from '@angular/core';
import { META } from './update.meta';

@Component({
    selector: 'update-log',
    templateUrl: './update-log.component.html',
    styleUrls: ['./update-log.component.scss']
})
export class UpdateLogComponent implements OnInit {

    updataList: any;

    constructor() { }

    ngOnInit() {
        this.updataList = META;
    }

}
