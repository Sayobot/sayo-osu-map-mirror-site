import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { PlayMusicService } from '../../service/PlayMusicService';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-map-detail',
    templateUrl: './map-detail.component.html',
    styleUrls: ['./map-detail.component.scss']
})
export class MapDetailComponent implements OnInit {

    mapUrl = 'https://osu.sayobot.cn/osu.php?s=';
    mapUrlV2 = 'https://txy1.sayobot.cn/download/osz/';
    mapUnVedio = 'https://txy1.sayobot.cn/download/osz/novideo/';
    addMapUrl = 'https://sayo.sayobot.cn/add/';

    mapDetail: any;
    imgUrl: string;
    time: any;

    musicTime: any;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private musicBox: PlayMusicService,
        public http: HttpClient
    ) { }

    // 点击下载事件
    onDownLoad(url) {
        this.downloadFile(`${url}${this.mapDetail.sid}`);
    }

    // 文件下载功能
    downloadFile(url) {
        const a = document.createElement('a');
        a.style.display = 'none';
        document.body.appendChild(a);
        a.href = url;
        a.click();
        document.body.removeChild(a);
    }

    // 试听歌曲
    playPart() {
        this.musicBox.play();
        this.time = Math.floor(this.musicBox.musicEl.duration) - Math.floor(this.musicBox.musicEl.currentTime);
        this.musicTime = setInterval(() => {
            this.time = Math.floor(this.musicBox.musicEl.duration) - Math.floor(this.musicBox.musicEl.currentTime) - 1;
            if (this.time === 0) {
                clearInterval(this.musicTime);
            }
        }, 1000);
    }

    // 播放完整音乐
    playComplete() {
        console.log('播放了完整的音乐');
    }

    // 添加铺面到服务器
    addMap(sid) {

    }

    ngOnInit() {
        this.imgUrl = `https://cdn.sayobot.cn:25225/beatmaps/${this.data.id}/covers/cover.jpg?0`;
        this.mapDetail = this.data.content;
        this.musicBox.setSrc(`https://cdn.sayobot.cn:25225/preview/${this.data.id}.mp3`);
    }

}
