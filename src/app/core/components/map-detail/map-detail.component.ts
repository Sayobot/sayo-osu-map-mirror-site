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
    imgUrl;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private musicBox: PlayMusicService
    ) { }

    // 点击下载事件
    onDownLoad() {
        // https://txy1.sayobot.cn/d/osz/1
        this.downloadFile(`https://osu.sayobot.cn/osu.php?s=${this.mapDetail.sid}`, this.mapDetail.sid);
    }

    // 文件下载功能
    downloadFile(url, sid) {
        const a = document.createElement('a');
        a.style.display = 'none';
        document.body.appendChild(a);
        a.href = url;
        a.setAttribute('download', sid);
        a.click();
        document.body.removeChild(a);
    }

    // 试听歌曲
    playPart() {
        this.musicBox.setSrc(`https://txy1.sayobot.cn/audio/${this.mapDetail.sid}.mp3`);
        this.musicBox.play();
    }

    // 播放完整音乐
    playComplete() {
        console.log('播放了完整的音乐');
    }


    ngOnInit() {
        this.mapDetail = this.data.content;

        // this.imgUrl = `https://txy1.sayobot.cn/beatmaps/${this.data.id}/covers/cover.jpg`;
        this.imgUrl = `https://cdn.sayobot.cn:25225/beatmaps/${this.data.id}/covers/cover.jpg?0`;
    }

}
