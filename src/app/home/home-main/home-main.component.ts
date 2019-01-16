import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DialogService, ApiService } from '../../core/service/';
import { Router } from '@angular/router';


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
        public http: HttpClient,
        public activeRoute: ActivatedRoute,
        public router: Router
    ) { }

    ngOnInit() {
        this.activeRoute
            .queryParams
            .subscribe(params => {
                if (params.search) {
                    this.search(params.search);
                } else {
                    this.apiService.getMapList();
                }
            });
        this.apiService.getSupport();
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

    onTabChange() {
        if (this.tabIndex === 0 && this.apiService.newMap.length === 0) {
            this.apiService.getNewMap();
            this.router.navigate(['']);
        }

        if (this.tabIndex === 1 && this.apiService.hotMap.length === 0) {
            this.apiService.getHotMap();
            this.router.navigate(['']);
        }

    }


    getHotMore = () => this.apiService.getHotMap();

    getNewMore = () => this.apiService.getNewMap();

    getSearchMore = () => this.apiService.getSearchList();

    // setImgUrl = sid => `https://txy1.sayobot.cn/beatmaps/${sid}/covers/cover.jpg`;
    setImgUrl = sid => `https://cdn.sayobot.cn:25225/beatmaps/${sid}/covers/cover.jpg?0`;
}


