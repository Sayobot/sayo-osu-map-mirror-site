import { Component, OnInit } from '@angular/core';
import { DialogService } from 'app/core/service/DialogService';
import { ApiService } from 'app/core/service/ApiService';
import { SearchService } from 'app/core/service/Search';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'hot-maps',
    templateUrl: './hot-maps.component.html',
    styleUrls: ['./hot-maps.component.scss']
})
export class HotMapsComponent implements OnInit {

    cols: number;
    doc: Document;

    constructor(
        public dialog: DialogService,
        public apiService: ApiService,
        public search: SearchService,
    ) { }

    ngOnInit() {
        this.doc = document;
        const docResize = fromEvent(window, 'resize').pipe(
            debounceTime(300),
        );
        docResize.subscribe(() => this.changeSize());
        this.changeSize();
    }

    changeSize() {
        const width = this.doc.documentElement.clientWidth;
        if (width > 1600) {
            this.cols = 4;
        } else if (width > 1300) {
            this.cols = 3;
        } else if (width > 1000) {
            this.cols = 2;
        } else {
            this.cols = 1;
        }
    }

    // 打开详情
    opneMapDetail = id => this.apiService.getMapDetail(id);

    // 设置图片
    setImgUrl = sid => `https://cdn.sayobot.cn:25225/beatmaps/${sid}/covers/cover.jpg?0`;

    getHotMore = () => this.apiService.getHotMap();
}
