import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
    PlayMusicService,
    ServerMangeService,
    MusicItem
} from '@app/core/service';
import { copy2Clipboard, downloadFile } from '@app/utils';
import { MapSidDetail, MapBidDetail, Approved } from '@app/shared/models';

@Component({
    selector: 'app-map-detail',
    templateUrl: './map-detail.component.html',
    styleUrls: ['./map-detail.component.scss']
})
export class MapDetailComponent implements OnInit {
    BASE_URL = 'https://txy1.sayobot.cn/beatmaps/download/';

    mapDetail: MapSidDetail; // 铺面详情
    imgUrl: string; // 图片链接
    parttime: number; // 试听剩余时间
    detailInfo: MapBidDetail;

    // 下载状态
    isMapDownload = false; // 是否正在下载
    isMapUnvedioDownload = false; // 不带视频是否在下载

    // 定时器
    musicTimer = null; // 音乐播放时间
    mapTimer = null; // 铺面下载定时器
    mapUnvedioTimer = null; // 不带视频铺面下载

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private musicBox: PlayMusicService,
        public serverMange: ServerMangeService,
        private snackBar: MatSnackBar,
        private detailDialog: MatDialogRef<MapDetailComponent>
    ) {}

    ngOnInit() {
        this.imgUrl = `https://cdn.sayobot.cn:25225/beatmaps/${this.data.id}/covers/cover.webp?0`;
        this.mapDetail = this.data.content;
        this.detailInfo = this.mapDetail.bid_data[0];
    }

    get approved() {
        return Approved[this.mapDetail.approved];
    }

    get link() {
        return `http://osugame.online/preview.html?sid=${this.mapDetail.sid}&bid=${this.detailInfo.bid}`;
    }

    // 点击下载事件
    onDownLoad(url: string) {
        downloadFile(
            `${this.BASE_URL}${url}?server=${this.serverMange.currentServer}`
        );
        this.isMapDownload = true;
        this.mapTimer = setTimeout(() => {
            this.isMapDownload = false;
            clearTimeout(this.mapTimer);
        }, 15000);
    }

    // 点击下载不带视频的事件
    onUnvedioDownload(url: string) {
        downloadFile(
            `${this.BASE_URL}${url}?server=${this.serverMange.currentServer}`
        );
        this.isMapUnvedioDownload = true;
        this.mapUnvedioTimer = setTimeout(() => {
            this.isMapUnvedioDownload = false;
            clearTimeout(this.mapUnvedioTimer);
        }, 15000);
    }

    // 点击难度变更数据
    difficultChange(bidData: MapBidDetail) {
        this.detailInfo = bidData;
    }

    // 点击标签出发搜索后关闭面板
    onTagSearch() {
        this.detailDialog.close();
    }

    // 试听歌曲
    playPart() {
        this.musicBox.switchAndPlay(
            new MusicItem({
                title: this.mapDetail.title,
                id: this.mapDetail.sid
            })
        );
        this.parttime =
            Math.floor(this.musicBox.musicEl.duration) -
            Math.floor(this.musicBox.musicEl.currentTime);
        this.musicTimer = setInterval(() => {
            this.parttime =
                Math.floor(this.musicBox.musicEl.duration) -
                Math.floor(this.musicBox.musicEl.currentTime) -
                1;
            if (this.parttime === 0) {
                clearInterval(this.musicTimer);
                this.musicTimer = null;
            }
        }, 1000);
    }

    // 将当前铺面复制到剪切板
    shared() {
        const sharedInfo = `https://osu.sayobot.cn/?search=${this.data.id}`;

        copy2Clipboard(sharedInfo).then(() => {
            this.snackBar.open('已复制：', sharedInfo, {
                duration: 2000
            });
        });
    }
}
