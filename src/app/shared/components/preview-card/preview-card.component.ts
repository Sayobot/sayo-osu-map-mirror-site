import { Component, OnInit, Input, Inject } from '@angular/core';
import {
    MapService,
    PlayMusicService,
    ServerMangeService
} from '@app/shared/service';
import { MapDetailComponent } from '@app/core';
import { MatDialog } from '@angular/material/dialog';
import * as myUtils from '@app/utils';

@Component({
    selector: 'preview-card',
    templateUrl: './preview-card.component.html',
    styleUrls: ['./preview-card.component.scss']
})
export class PreviewCardComponent implements OnInit {
    @Input() preview;

    musicStatu = false;

    constructor(
        @Inject('BASE_CONFIG') public config,
        private maps: MapService,
        private musicBox: PlayMusicService,
        public serverMange: ServerMangeService,
        public dialog: MatDialog
    ) {}

    ngOnInit() {}

    // 设置图片
    setImgUrl = (sid) => `${this.config.pic}${sid}/covers/cover.webp?0`;

    getStatus() {
        let statu: string;
        switch (this.preview.approved) {
            case 4:
                statu = 'loved';
                break;
            case 3:
                statu = 'qualified';
                break;
            case 2:
                statu = 'approved';
                break;
            case 1:
                statu = 'ranked';
                break;
            case 0:
                statu = 'pending';
                break;
            case -1:
                statu = 'WIP';
                break;
            case -2:
                statu = 'graveyard';
                break;
        }
        return statu;
    }

    // 打开详情
    opneMapDetail(id: number) {
        this.maps.getMapDetail(id).subscribe((res: any) => {
            if (res.status === 0) {
                this.maps.detail = res.data;
                this.openMapDetailDialog(id, this.maps.detail);
            }
        });
    }

    openMapDetailDialog(id: number, detail: any) {
        this.dialog.open(MapDetailComponent, {
            panelClass: 'no-padding-dialog',
            maxWidth: '100vw',
            maxHeight: '100vh',
            width: '1080px',
            data: {
                id: id,
                content: detail
            }
        });
    }

    play() {
        this.musicBox.setSrc(this.preview.sid);
        this.musicStatu = true;
        this.musicBox.play();
    }

    pause() {
        this.musicStatu = false;
        this.musicBox.pause();
    }

    isPlay() {
        return this.preview.sid === this.musicBox.sid && this.musicStatu
            ? true
            : false;
    }

    onDownLoad(url: string) {
        myUtils.downloadFile(
            `${url}${this.preview.sid}?server=${this.serverMange.currentServer}`
        );
    }

    showSTD(modes: number) {
        const std = [1, 3, 5, 7, 9, 11, 13, 15];
        return std.includes(modes);
    }

    showTaiko(modes: number) {
        const taiko = [2, 3, 6, 7, 10, 11, 14, 15];
        return taiko.includes(modes);
    }

    showCatch(modes: number) {
        const catchs = [4, 5, 6, 7, 12, 13, 14, 15];
        return catchs.includes(modes);
    }

    showMania(modes: number) {
        return modes >= 8;
    }
}
