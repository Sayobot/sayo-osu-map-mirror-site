import { Component, OnInit } from '@angular/core';
import { PlayMusicService } from '@app/shared/service';

@Component({
    selector: 'music-box',
    templateUrl: './music-box.component.html',
    styleUrls: ['./music-box.component.scss']
})
export class MusicBoxComponent implements OnInit {
    constructor(public musicBox: PlayMusicService) {}

    ngOnInit() {}

    get status() {
        return this.musicBox.isPlay ? 'pause_black' : 'play_arrow';
    }

    switchStatus() {
        this.musicBox.switch();
    }
}
