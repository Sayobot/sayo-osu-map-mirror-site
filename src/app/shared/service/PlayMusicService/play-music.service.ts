import { Injectable, Inject } from '@angular/core';

const musicCDN = 'https://cdnx.sayobot.cn:25225/preview/';

class Music {
    private _title: string;
    sid: number;
    src: string;

    constructor() {
        this.title = '请开始播放音乐';
    }

    get title() {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    update(map: { title: string; sid: number }) {
        this.title = map.title;
        this.sid = map.sid;
        this.src = `${musicCDN}${this.sid}.mp3`;
    }
}

@Injectable({
    providedIn: 'root'
})
export class PlayMusicService {
    musicEl = new Audio();
    private _isPlay: boolean;
    current: Music;

    get isPlay() {
        return this._isPlay;
    }

    set isPlay(status: boolean) {
        this._isPlay = status;
    }

    constructor() {
        this.musicEl.preload = 'metadata';
        this.current = new Music();
        this.isPlay = false;
    }

    play() {
        this.musicEl.play();
        this.isPlay = true;
    }

    pause() {
        this.musicEl.pause();
        this.isPlay = false;
    }

    switch() {
        this.isPlay ? this.pause() : this.play();
    }

    switchAndPlay(map: { title: string; sid: number }) {
        this.isPlay = false;
        this.current.update(map);
        this.musicEl.src = this.current.src;
        this.play();
    }
}
