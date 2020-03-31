import { Injectable } from '@angular/core';

const MUSIC_CDN = 'https://cdnx.sayobot.cn:25225/preview/';

interface Music {
    title: string;
    id: number;
}

export class MusicItem {
    title: string;
    sid: number;
    src: string;

    constructor(item: Music) {
        this.title = item.title;
        this.sid = item.id;
        this.src = `${MUSIC_CDN}${this.sid}.mp3`;
    }
}

/**
 * TODO:优先级队列
 */
class Queue<T> {
    items: T[];
    head: T;

    constructor(data: T[] = []) {
        this.items = data;
    }

    size() {
        return this.items.length;
    }
}

@Injectable({
    providedIn: 'root'
})
export class PlayMusicService {
    musicEl = new Audio();
    isPlay: boolean;

    current: MusicItem;
    playList: MusicItem[];

    constructor() {
        this.musicEl.preload = 'metadata';
        this.isPlay = false;
        this.playList = [];
        this.current = null;
    }

    play() {
        this.musicEl.play();
        this.isPlay = true;
    }

    pause() {
        this.musicEl.pause();
        this.isPlay = false;
    }

    /**
     * TODO:判断是否重复，是的话将这首歌放到队列首并播放
     * @param item Music
     */
    add(item: Music) {
        this.playList.push(new MusicItem(item));
    }

    insert(item: MusicItem) {
        this.playList.unshift(item);
        this.current = this.playList[0];
        this.musicEl.src = this.current.src;
    }

    remove(id: number) {
        this.playList.filter((el) => el.sid === id);
    }

    switch() {
        this.isPlay ? this.pause() : this.play();
    }

    switchAndPlay(item: MusicItem) {
        this.isPlay = false;
        this.insert(item);
        this.play();
    }

    playNow(item: MusicItem) {
        this.isPlay = false;
        this.current = item;
        this.musicEl.src = this.current.src;
        this.play();
    }

    get empty() {
        return !this.current || this.playList.length <= 0;
    }
}
