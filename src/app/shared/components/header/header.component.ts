import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { language } from 'assets/i18n/language';
import { ServerMangeService } from '@app/shared/service';
import {
    HelpDialogComponent,
    SupportSayobotComponent,
    AboutDialogComponent
} from '@app/core';

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
        this.dialog.open(HelpDialogComponent, {
            maxWidth: '98%',
            width: '700px'
        });
    }

    openSupperDialog() {
        this.dialog.open(SupportSayobotComponent, {
            height: '98%',
            maxHeight: '98%',
            width: '700px'
        });
    }

    openAboutDialog() {
        this.dialog.open(AboutDialogComponent, {
            maxWidth: '98%',
            width: '700px',
            maxHeight: '98%'
        });
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
