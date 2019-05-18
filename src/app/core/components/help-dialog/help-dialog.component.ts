import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '@service/LocalStorage';

@Component({
    selector: 'app-help-dialog',
    templateUrl: './help-dialog.component.html',
    styleUrls: ['./help-dialog.component.scss']
})
export class HelpDialogComponent implements OnInit {
    checked: boolean;
    constructor(
        public local: LocalStorageService,
    ) { }

    ngOnInit() {
        this.checked = this.local.getItem('isShow') === 'true' ? true : false;
    }

    statusChange() {
        const key = String(this.checked);
        this.local.setItem('isShow', key);
    }
}
