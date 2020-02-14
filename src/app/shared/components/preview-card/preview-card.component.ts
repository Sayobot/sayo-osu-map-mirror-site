import { Component, OnInit, Input, Inject } from '@angular/core';
import {
    MapService,
    PlayMusicService,
    ServerMangeService
} from '@app/shared/service';
import { MapDetailComponent } from '@app/core';
import { MatDialog } from '@angular/material/dialog';
import * as myUtils from '@app/utils';
import { PreMap, MapSidDetail, Approved } from '@app/shared/models';

const Modes_Config = {
    std: [1, 3, 5, 7, 9, 11, 13, 15],
    taiko: [2, 3, 6, 7, 10, 11, 14, 15],
    catch: [4, 5, 6, 7, 12, 13, 14, 15],
    mania: [8, 9, 10, 11, 12, 13, 14, 15, 16]
};

@Component({
    selector: 'preview-card',
    templateUrl: './preview-card.component.html',
    styleUrls: ['./preview-card.component.scss']
})
export class PreviewCardComponent implements OnInit {
    @Input() preview: PreMap;

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

    get approved() {
        return Approved[this.preview.approved];
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
        return this.preview.sid === this.musicBox.sid && this.musicStatu;
    }

    onDownLoad(url: string) {
        myUtils.downloadFile(
            `${url}${this.preview.sid}?server=${this.serverMange.currentServer}`
        );
    }

    showModes(type: string, code: number) {
        return Modes_Config[type].includes(code);
    }

    opneMapDetail(id: number) {
        this.maps.getMapDetail(id).subscribe((res: any) => {
            if (res.status === 0) {
                this.maps.detail = res.data;
                this.openMapDetailDialog(id, this.maps.detail);
            }
        });
    }

    openMapDetailDialog(id: number, detail: MapSidDetail) {
        this.dialog.open(MapDetailComponent, {
            panelClass: 'common-dialog',
            data: { id: id, content: detail }
        });
    }
}
