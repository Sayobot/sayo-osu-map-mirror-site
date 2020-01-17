import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PlayMusicService, ClipboardService, DownloadService, ServerMangeService } from '@app/shared/service';

import { MapDetailChild } from 'app/shared/models';

@Component({
    selector: 'app-map-detail',
    templateUrl: './map-detail.component.html',
    styleUrls: ['./map-detail.component.scss']
})
export class MapDetailComponent implements OnInit {
    mapDetail: any; // 铺面详情
    imgUrl: string; // 图片链接
    parttime: number; // 试听剩余时间
    detailInfo: MapDetailChild;

    // 下载状态
    isMapDownload = false; // 是否正在下载
    isMapUnvedioDownload = false; // 不带视频是否在下载

    // 定时器
    musicTimer: any; // 音乐播放时间
    mapTimer: any; // 铺面下载定时器
    mapUnvedioTimer: any; // 不带视频铺面下载

    constructor(
        @Inject('BASE_CONFIG') public config,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private musicBox: PlayMusicService,
        private download: DownloadService,
        public serverMange: ServerMangeService,
        private clipBoard: ClipboardService,
        private detailDialog: MatDialogRef<MapDetailComponent>
    ) {}

    // 点击下载事件
    onDownLoad(url: string) {
        this.download.downloadFile(`${url}${this.mapDetail.sid}?server=${this.serverMange.currentServer}`);
        this.isMapDownload = true;
        this.mapTimer = setTimeout(() => {
            this.isMapDownload = false;
            clearTimeout(this.mapTimer);
        }, 15000);
    }

    // 点击下载不带视频的事件
    onUnvedioDownload(url: string) {
        this.download.downloadFile(`${url}${this.mapDetail.sid}?server=${this.serverMange.currentServer}`);
        this.isMapUnvedioDownload = true;
        this.mapUnvedioTimer = setTimeout(() => {
            this.isMapUnvedioDownload = false;
            clearTimeout(this.mapUnvedioTimer);
        }, 15000);
    }

    difficultChange(index: number) {
        this.detailInfo = this.mapDetail.bid_data[index];
    }

    onTagSearch() {
        this.detailDialog.close();
    }

    getStatus() {
        let statu: string;
        switch (this.mapDetail.approved) {
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

    // 试听歌曲
    playPart() {
        this.musicBox.play();
        this.parttime = Math.floor(this.musicBox.musicEl.duration) - Math.floor(this.musicBox.musicEl.currentTime);
        this.musicTimer = setInterval(() => {
            this.parttime =
                Math.floor(this.musicBox.musicEl.duration) - Math.floor(this.musicBox.musicEl.currentTime) - 1;
            if (this.parttime === 0) {
                clearInterval(this.musicTimer);
                this.musicTimer = null;
            }
        }, 1000);
    }

    ngOnInit() {
        this.imgUrl = `${this.config.pic}${this.data.id}/covers/cover.webp?0`;
        this.mapDetail = this.data.content;
        this.musicBox.setSrc(this.data.id);

        this.detailInfo = this.mapDetail.bid_data[0];
    }

    shared() {
        this.clipBoard.copy(`https://${this.config.domain}/?search=${this.data.id}`);
    }
}
