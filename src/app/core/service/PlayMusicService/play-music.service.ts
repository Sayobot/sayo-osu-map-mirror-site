import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PlayMusicService {

    musicEl = new Audio();

    constructor() {
        this.musicEl.preload = 'metadata';
    }

    play = () => this.musicEl.play();

    pause = () => this.musicEl.pause();

    setSrc = src => this.musicEl.src = src;

}
