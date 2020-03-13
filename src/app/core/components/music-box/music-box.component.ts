import { Component, OnInit } from '@angular/core';
import { PlayMusicService, MusicItem } from '@app/core/service';

@Component({
    selector: 'music-box',
    templateUrl: './music-box.component.html',
    styleUrls: ['./music-box.component.scss']
})
export class MusicBoxComponent implements OnInit {
    isOpenList: boolean;
    constructor(public musicBox: PlayMusicService) {
        this.isOpenList = false;
    }

    ngOnInit() {}

    get status() {
        return this.musicBox.isPlay ? 'pause_black' : 'play_arrow';
    }

    // 切换播放状态
    switchStatus() {
        this.musicBox.switch();
    }

    // 切换列表状态
    switchListBox() {
        this.isOpenList = !this.isOpenList;
    }

    // 在已有的列表中切歌
    playNow(music: MusicItem) {
        this.musicBox.playNow(music);
    }

    isMatch(music: MusicItem) {
        return this.musicBox.current === music;
    }
}
