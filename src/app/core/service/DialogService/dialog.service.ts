import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AboutDialogComponent } from 'app/core/components/about-dialog';
import { HelpDialogComponent } from 'app/core/components/help-dialog';
import { MapDetailComponent } from 'app/core/components/map-detail';
import { NotFoundMapDialogComponent } from 'app/core/components/not-found-map-dialog';
import { SupportSayobotComponent } from 'app/core/components/support-sayobot';

@Injectable({
    providedIn: 'root'
})
export class DialogService {

    constructor(
        private dialog: MatDialog
    ) { }

    supprot() {
        this.dialog.open(
            SupportSayobotComponent, {
                height: '96%',
                maxHeight: '96%',
                width: '600px',
            });
    }

    // 打开帮助弹窗
    help() {
        this.dialog.open(
            HelpDialogComponent, {
                maxWidth: '40vw'
            }
        );
    }

    // 打开关于小夜的弹窗
    about() {
        this.dialog.open(
            AboutDialogComponent, {
                maxHeight: '90vh',
                height: '90vh',
                maxWidth: '600px'
            });
    }

    // 未找到
    notFoundMap(str) {
        this.dialog.open(
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
        this.dialog.open(
            MapDetailComponent, {
                panelClass: 'no-padding-dialog',
                width: '70vw',
                maxHeight: '100vh',
                data: {
                    id: id,
                    content: detail
                }
            }
        );
    }
}
