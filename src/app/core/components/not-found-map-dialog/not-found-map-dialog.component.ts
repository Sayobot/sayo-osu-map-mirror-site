import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-not-found-map-dialog',
    templateUrl: './not-found-map-dialog.component.html',
    styleUrls: ['./not-found-map-dialog.component.scss']
})
export class NotFoundMapDialogComponent implements OnInit {

    key: string;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }

    ngOnInit() {
        this.key = this.data;
    }

}
