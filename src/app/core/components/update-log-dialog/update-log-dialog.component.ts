import { Component, OnInit } from '@angular/core';
import { META } from './update,component.meta';

@Component({
    selector: 'app-update-log-dialog',
    templateUrl: './update-log-dialog.component.html',
    styleUrls: ['./update-log-dialog.component.scss']
})
export class UpdateLogDialogComponent implements OnInit {

    updataList: any;

    constructor() { }

    ngOnInit() {
        this.updataList = META;
    }

}
