import { Component, OnInit, Inject } from '@angular/core';

@Component({
    selector: 'app-help-dialog',
    templateUrl: './help-dialog.component.html',
    styleUrls: ['./help-dialog.component.scss']
})
export class HelpDialogComponent implements OnInit {
    checked: boolean;

    constructor() {}

    ngOnInit() {
        this.checked = localStorage.getItem('isShow') === 'true' ? true : false;
    }

    statusChange() {
        localStorage.setItem('isShow', this.checked.toString());
    }
}
