import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DialogService } from '@service/DialogService';
import { LocalStorageService } from '@service/LocalStorage';
import { ServerMangeService } from '@service/ServerMange';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'home-header',
    templateUrl: './home-header.component.html',
    styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit, AfterViewInit {

    constructor(
        public dialog: DialogService,
        private local: LocalStorageService,
        public serverMange: ServerMangeService,
        private translate: TranslateService
    ) { }

    ngOnInit() {

    }

    useLanguage(lang) {
        this.translate.setDefaultLang(lang);
    }

    ngAfterViewInit() {
        if (!this.local.getItem('isShow') || this.local.getItem('isShow') === 'false') {
            setTimeout(() => {
                this.dialog.help();
            }, 0);
        }
    }
}
