import { Component, OnInit, Inject } from '@angular/core';
import { LocalStorageService } from '@service/LocalStorage';

@Component({
    selector: 'app-help-dialog',
    templateUrl: './help-dialog.component.html',
    styleUrls: ['./help-dialog.component.scss']
})
export class HelpDialogComponent implements OnInit {
    checked: boolean;
    domain: string;
    constructor(
        public local: LocalStorageService,
        @Inject('BASE_CONFIG') private config,
    ) { }

    ngOnInit() {
        this.checked = this.local.getItem('isShow') === 'true' ? true : false;
        this.domain = this.config.domain;
    }

    statusChange() {
        const key = String(this.checked);
        this.local.setItem('isShow', key);
    }
}
