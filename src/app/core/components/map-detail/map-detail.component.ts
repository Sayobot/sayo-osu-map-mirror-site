import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { PlayMusicService } from '../../service/PlayMusicService';

@Component({
    selector: 'app-map-detail',
    templateUrl: './map-detail.component.html',
    styleUrls: ['./map-detail.component.scss']
})
export class MapDetailComponent implements OnInit {

    mapDetail: any;
    imgUrl: string;
    time: any;

    musicTime: any;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private musicBox: PlayMusicService
    ) { }

    // 点击下载事件
    onDownLoad() {
        // https://txy1.sayobot.cn/d/osz/1
        this.downloadFile(`https://osu.sayobot.cn/osu.php?s=${this.mapDetail.sid}`);
    }

    // 下载V2
    onDownLoadV2() {
        this.downloadFile(`https://txy1.sayobot.cn/download/osz/${this.mapDetail.sid}`);
    }

    // 不带视频下载
    onDownLoadUnVedio() {
        this.downloadFile(`https://txy1.sayobot.cn/download/osz/novideo/${this.mapDetail.sid}`);
    }

    // 文件下载功能
    downloadFile(url) {
        const a = document.createElement('a');
        a.style.display = 'none';
        document.body.appendChild(a);
        a.href = url;
        // a.setAttribute('download', sid);
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

    ngOnInit() {
        this.imgUrl = `https://cdn.sayobot.cn:25225/beatmaps/${this.data.id}/covers/cover.jpg?0`;
        this.mapDetail = this.data.content;
        this.musicBox.setSrc(`https://cdn.sayobot.cn:25225/preview/${this.data.id}.mp3`);
    }

}
