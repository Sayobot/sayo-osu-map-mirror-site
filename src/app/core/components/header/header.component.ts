import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { language } from 'assets/i18n/language';
import { ServerMangeService } from '@app/core/service';
import { HelpDialogComponent } from '../help-dialog/help-dialog.component';
import { AboutDialogComponent } from '../about-dialog/about-dialog.component';

const dialog_common_config = {
    height: '98%',
    maxHeight: '98%',
    width: '700px'
};

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
    language: Array<any>;

    constructor(
        public serverMange: ServerMangeService,
        private translate: TranslateService,
        private dialog: MatDialog
    ) {}

    ngOnInit() {
        this.language = language;

        if (localStorage.getItem('language')) {
            const lang = localStorage.getItem('language');
            this.useLanguage(lang);
        }
    }

    useLanguage(lang) {
        localStorage.setItem('language', lang);
        this.translate.setDefaultLang(lang);
    }

    openHelpDialog() {
        this.dialog.open(HelpDialogComponent, dialog_common_config);
    }

    openAboutDialog() {
        this.dialog.open(AboutDialogComponent, dialog_common_config);
    }

    isShowHelpDialog() {
        return (
            !localStorage.getItem('isShow') ||
            localStorage.getItem('isShow') === 'false'
        );
    }

    ngAfterViewInit() {
        if (this.isShowHelpDialog()) {
            setTimeout(() => {
                this.openHelpDialog();
            }, 0);
        }
    }
}
