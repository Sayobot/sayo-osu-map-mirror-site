import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DialogService } from '@service/DialogService';
import { LocalStorageService } from '@service/LocalStorage';
import { ServerMangeService } from '@service/ServerMange';
import { TranslateService } from '@ngx-translate/core';
import { language } from 'assets/i18n/language';

@Component({
    selector: 'home-header',
    templateUrl: './home-header.component.html',
    styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit, AfterViewInit {
    language: Array<any>;

    constructor(
        public dialog: DialogService,
        private local: LocalStorageService,
        public serverMange: ServerMangeService,
        private translate: TranslateService
    ) {}

    ngOnInit() {
        this.language = language;

        if (this.local.getItem('language')) {
            const lang = this.local.getItem('language');
            this.useLanguage(lang);
        }
    }

    useLanguage(lang) {
        this.local.setItem('language', lang);
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
