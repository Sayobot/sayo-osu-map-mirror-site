import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DialogService } from '@service/DialogService';
import { LocalStorageService } from '@service/LocalStorage';
import { ServerMangeService } from '@service/ServerMange';

@Component({
    selector: 'home-header',
    templateUrl: './home-header.component.html',
    styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit, AfterViewInit {

    constructor(
        public dialog: DialogService,
        private local: LocalStorageService,
        public serverMange: ServerMangeService
    ) { }

    ngOnInit() {

    }

    ngAfterViewInit() {
        if (!this.local.getItem('isShow') || this.local.getItem('isShow') === 'false') {
            setTimeout(() => {
                this.dialog.help();
            }, 0);
        }
    }
}
