import { Component, OnInit } from '@angular/core';
import { DialogService, ApiService } from '../../core';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'home-main',
    templateUrl: './home-main.component.html',
    styleUrls: ['./home-main.component.scss']
})
export class HomeMainComponent implements OnInit {
    tabIndex: number;       // tab选项卡当前选中的下标，双向绑定
    searchKey: string;      // 搜搜关键字

    constructor(
        public dialog: DialogService,
        public apiService: ApiService,
        public http: HttpClient
    ) { }

    ngOnInit() {
        this.apiService.getSupport();
        this.apiService.getMapList();
        this.apiService.getNewsList();
    }

    opneMapDetail = id => {
        this.apiService.getMapDetail(id);
        this.dialog.mapDetail(id, this.apiService.detail);
    }

    openNotFoundMap = () => this.dialog.notFoundMap();

    search(str) {
        this.searchKey = str.replace(/["]/ig, '').replace(/(^\s*)|(\s*$)/ig, '');
        if (this.searchKey !== '') {
            this.apiService.getSearch(this.searchKey);
            this.tabIndex = 3;
        } else {
            this.dialog.notFoundMap();
        }
    }

    getHotMore = () => this.apiService.getHotMap();

    getNewMore = () => this.apiService.getNewMap();

    getSearchMore = () =>  this.apiService.getSearchList();


    // setImgUrl = sid => `https://txy1.sayobot.cn/beatmaps/${sid}/covers/cover.jpg`;
    setImgUrl = sid => `https://assets.ppy.sh/beatmaps/${sid}/covers/cover.jpg?295843639`;
}


