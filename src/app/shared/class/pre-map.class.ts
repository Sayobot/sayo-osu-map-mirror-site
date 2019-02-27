import { PlayMusicService } from 'app/core/service/PlayMusicService';

export class PreMap {
    private music: PlayMusicService;
    title: string;
    artist: string;
    creator: string;
    sid: number;

    constructor(map) {
        this.sid = map.sid;
        this.title = map.title;
        this.artist = map.artist;
        this.creator = map.creator;
    }

    play() {
        this.music.play();
    }

    pause() {
        this.music.pause();
    }
}
