import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-map-detail',
    templateUrl: './map-detail.component.html',
    styleUrls: ['./map-detail.component.scss']
})
export class MapDetailComponent implements OnInit {

    mapDetail: any;
    imgUrl;

    onDownLoad() {
        // https://txy1.sayobot.cn/d/osz/1
        window.open(`https://osu.sayobot.cn/osu.php?s=${this.mapDetail.sid}`);
    }

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }

    ngOnInit() {
        this.mapDetail = this.data.content;
        console.log(this.mapDetail);

        this.imgUrl = `https://assets.ppy.sh/beatmaps/${this.data.id}/covers/cover.jpg?295843639`;
    }

}
