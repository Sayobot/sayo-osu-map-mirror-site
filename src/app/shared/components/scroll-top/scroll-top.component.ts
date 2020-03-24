import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'scroll-top',
    templateUrl: './scroll-top.component.html',
    styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    scroll() {
        window.scrollTo(0, 0);
    }

    // !TODO 滚动到顶部的流畅动画
}
