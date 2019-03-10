import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PlayMusicService {
    sid: number;
    musicEl = new Audio();

    constructor() {
        this.musicEl.preload = 'metadata';
    }

    play = () => this.musicEl.play();

    pause = () => this.musicEl.pause();

    setSrc(sid: number) {
        this.sid = sid;
        this.musicEl.src = `https://cdnx.sayobot.cn:25225/preview/${this.sid}.mp3`;
    }
}
