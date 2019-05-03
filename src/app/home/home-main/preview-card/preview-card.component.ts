import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'app/core/service/ApiService';
import { PlayMusicService } from 'app/core/service/PlayMusicService';
import { DownloadService } from 'app/core/service/Download';
import { ServerMangeService } from 'app/core/service/ServerMange';

@Component({
    selector: 'preview-card',
    templateUrl: './preview-card.component.html',
    styleUrls: ['./preview-card.component.scss']
})
export class PreviewCardComponent implements OnInit {
    @Input() preview;

    mapUrlV2 = 'https://txy1.sayobot.cn/download/osz/';             // 下载V2
    musicStatu = false;

    constructor(
        private apiService: ApiService,
        private musicBox: PlayMusicService,
        private download: DownloadService,
        public serverMange: ServerMangeService
    ) { }

    ngOnInit() {
    }

    // 设置图片
    setImgUrl = sid => `https://cdn.sayobot.cn:25225/beatmaps/${sid}/covers/cover.jpg?0`;

    getStatus() {
        let statu: string;
        switch (this.preview.approved) {
            case 4: statu = 'loved'; break;
            case 3: statu = 'qualified'; break;
            case 2: statu = 'approved'; break;
            case 1: statu = 'ranked'; break;
            case 0: statu = 'pending'; break;
            case -1: statu = 'WIP'; break;
            case -2: statu = 'graveyard'; break;
        }
        return statu;
    }

    // 打开详情
    opneMapDetail(id: number) {
        this.apiService.getMapDetail(id);
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
        return this.preview.sid === this.musicBox.sid && this.musicStatu ? true : false;
    }

    onDownLoad(url: string) {
        this.download.downloadFile(`${url}${this.preview.sid}?server=${this.serverMange.currentServer}`);
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
