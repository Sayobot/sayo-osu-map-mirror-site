import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AboutDialogComponent } from '../../components/about-dialog';
import { HelpDialogComponent } from '../../components/help-dialog';
import { MapDetailComponent } from '../../components/map-detail';
import { NotFoundMapDialogComponent } from '../../components/not-found-map-dialog';
import { SupportSayobotComponent } from '../../components/support-sayobot';
import { UpdateLogDialogComponent } from '../../components/update-log-dialog';

@Injectable({
    providedIn: 'root'
})
export class DialogService {

    constructor(
        public dialog: MatDialog
    ) { }

    supprot() {
        const supportDilog = this.dialog.open(
            SupportSayobotComponent, {
                height: '96%',
                maxHeight: '96%',
                width: '600px',
            });
    }

    // 打开帮助弹窗
    help() {
        const helpDialog = this.dialog.open(
            HelpDialogComponent, {
                maxWidth: '40vw'
            }
        );
    }

    // 打开关于小夜的弹窗
    about() {
        const aboutDialg = this.dialog.open(
            AboutDialogComponent, {
                maxHeight: '90vh',
                height: '90vh',
                maxWidth: '600px'
            });
    }

    // 打开更新日志的弹窗
    updateLog() {
        const UpdateLog = this.dialog.open(
            UpdateLogDialogComponent,
            {
                maxHeight: '90vh',
                height: '70vh',
                maxWidth: '600px'
            });
    }

    // 未找到
    notFoundMap(str) {
        const notFoundMap = this.dialog.open(
            NotFoundMapDialogComponent,
            {
                data: {
                    key: str,
                }
            }
        );
    }

    // 铺面详情
    mapDetail(id, detail) {
        const mapDetail = this.dialog.open(
            MapDetailComponent, {
                panelClass: 'no-padding-dialog',
                width: '80vw',
                height: '90vh',
                data: {
                    id: id,
                    content: detail
                }
            }
        );
    }
}
