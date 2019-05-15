import { Component, OnInit } from '@angular/core';
import { DialogService } from 'app/core/service/DialogService';
import { LocalStorageService } from 'app/core/service/LocalStorage';
import { ServerMangeService } from 'app/core/service/ServerMange';

@Component({
    selector: 'home-header',
    templateUrl: './home-header.component.html',
    styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

    constructor(
        public dialog: DialogService,
        private local: LocalStorageService,
        public serverMange: ServerMangeService
    ) { }

    ngOnInit() {
        if (!this.local.getItem('isShow') || this.local.getItem('isShow') === 'false') {
            setTimeout(() => {
                this.dialog.help();
            }, 500);
        }
    }

}
