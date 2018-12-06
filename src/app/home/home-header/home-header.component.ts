import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

// 弹窗模板组件
import { AboutDialogComponent } from "../dialog/about-dialog/about-dialog.component";
import { HelpDialogComponent } from "../dialog/help-dialog/help-dialog.component";
import { SupportSayobotComponent } from "../dialog/support-sayobot/support-sayobot.component";


@Component({
    selector: 'home-header',
    templateUrl: './home-header.component.html',
    styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

    constructor(
        public dialog: MatDialog
    ) { }

    ngOnInit() {
    }

    // 打开支持小夜的弹窗
    openSupprotDialog() {
        let supportDilog = this.dialog.open(SupportSayobotComponent, {
            maxHeight: '96%',
            width: '600px',
        });
    }

    // 打开帮助弹窗
    openHelpDialg() {
        let helpDialog = this.dialog.open(HelpDialogComponent, {
            height: '400px',
            width: '600px',
        });
    }

    // 打开关于小夜的弹窗
    openAboutDialog() {
        let aboutDialg = this.dialog.open(AboutDialogComponent, {
            height: '400px',
            width: '600px',
        });
    }

}
