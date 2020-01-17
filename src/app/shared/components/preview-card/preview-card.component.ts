import { Component, OnInit, Input, Inject } from '@angular/core';
import {
    MapService,
    PlayMusicService,
    DownloadService,
    ServerMangeService
} from '@app/shared/service';

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
        private download: DownloadService,
        public serverMange: ServerMangeService
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
        this.maps.getMapDetail(id);
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
        this.download.downloadFile(
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
