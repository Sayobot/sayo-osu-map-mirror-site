import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'preview-card',
    templateUrl: './preview-card.component.html',
    styleUrls: ['./preview-card.component.scss']
})
export class PreviewCardComponent implements OnInit {
    @Input() preview;

    constructor() { }

    ngOnInit() {
    }

    // 设置图片
    setImgUrl = sid => `https://cdn.sayobot.cn:25225/beatmaps/${sid}/covers/cover.jpg?0`;

}
