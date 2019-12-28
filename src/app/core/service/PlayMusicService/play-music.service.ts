import { Injectable, Inject } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PlayMusicService {
    sid: number;
    musicEl = new Audio();

    constructor(@Inject('BASE_CONFIG') private config) {
        this.musicEl.preload = 'metadata';
    }

    play = () => this.musicEl.play();

    pause = () => this.musicEl.pause();

    setSrc(sid: number) {
        this.sid = sid;
        this.musicEl.src = `${this.config.previewMp3}${this.sid}.mp3`;
    }
}
