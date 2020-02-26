import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
    PlayMusicService,
    ClipboardService,
    ServerMangeService,
    MusicItem
} from '@app/shared/service';
import * as myUtils from '@app/utils';
import { MapSidDetail, MapBidDetail, Approved } from '@app/shared/models';

@Component({
    selector: 'app-map-detail',
    templateUrl: './map-detail.component.html',
    styleUrls: ['./map-detail.component.scss']
})
export class MapDetailComponent implements OnInit {
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
        @Inject('BASE_CONFIG') public config,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private musicBox: PlayMusicService,
        public serverMange: ServerMangeService,
        private clipBoard: ClipboardService,
        private detailDialog: MatDialogRef<MapDetailComponent>
    ) {}

    get approved() {
        return Approved[this.mapDetail.approved];
    }

    // 点击下载事件
    onDownLoad(url: string) {
        myUtils.downloadFile(
            `${url}${this.mapDetail.sid}?server=${this.serverMange.currentServer}`
        );
        this.isMapDownload = true;
        this.mapTimer = setTimeout(() => {
            this.isMapDownload = false;
            clearTimeout(this.mapTimer);
        }, 15000);
    }

    // 点击下载不带视频的事件
    onUnvedioDownload(url: string) {
        myUtils.downloadFile(
            `${url}${this.mapDetail.sid}?server=${this.serverMange.currentServer}`
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

    ngOnInit() {
        this.imgUrl = `${this.config.pic}${this.data.id}/covers/cover.webp?0`;
        this.mapDetail = this.data.content;
        this.detailInfo = this.mapDetail.bid_data[0];
    }

    // 将当前铺面复制到剪切板
    shared() {
        this.clipBoard.copy(
            `https://${this.config.domain}/?search=${this.data.id}`
        );
    }
}
