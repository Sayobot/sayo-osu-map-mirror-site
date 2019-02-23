import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DialogService, ApiService } from '../../core/service/';
import { Router } from '@angular/router';

import { ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'home-main',
    templateUrl: './home-main.component.html',
    styleUrls: ['./home-main.component.scss']
})
export class HomeMainComponent implements OnInit, AfterViewInit {
    tabIndex: number;       // tab选项卡当前选中的下标，双向绑定
    searchKey: string;      // 搜搜关键字
    scrollSub: any;         // 订阅

    constructor(
        public dialog: DialogService,
        public apiService: ApiService,
        public http: HttpClient,
        public activeRoute: ActivatedRoute,
        public router: Router,
        private el: ElementRef
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

    ngAfterViewInit() {
        this.setMainBox();
    }

    // 获取当前可视的容器
    setMainBox() {
        const srcrollBox = this.el.nativeElement.querySelectorAll('.mat-tab-body-content');
        const mapContent = this.el.nativeElement.querySelector('.map-content');

        srcrollBox.forEach((item, index) => {
            this.setEventScroll(item, mapContent, index);
        });
    }

    // 绑定滚动事件
    setEventScroll(target, box, index) {
        this.scrollSub = fromEvent(target, 'scroll').pipe(
            debounceTime(100)
        );

        this.scrollSub.subscribe(res => {
            const boxHeight = box.clientHeight;
            const height = target.scrollTop;
            if (boxHeight - height < 1000 && boxHeight - height > 0) {
                switch (index) {
                    case 0: this.apiService.newEndId !== 0 ? this.getNewMore() : console.log('已经到底啦！'); break;
                    case 1: this.apiService.hotEndId !== 0 ? this.getHotMore() : console.log('已经到底啦！'); break;
                    case 2: this.apiService.searchEndId !== 0 ? this.getSearchMore() : console.log('已经到底啦！'); break;
                    default:
                        break;
                }
            }
        });
    }

    // 打开详情
    opneMapDetail = id => this.apiService.getMapDetail(id);

    // 搜索map
    search(str) {
        this.searchKey = str.replace(/["]/ig, '').replace(/(^\s*)|(\s*$)/ig, '');
        if (this.searchKey !== '') {
            this.apiService.getSearch(this.searchKey);
            this.tabIndex = 3;
        } else {
            this.dialog.notFoundMap(str);
        }
    }

    // tab选项卡改变
    onTabChange() {

        setTimeout(() => {
            this.setMainBox();
        }, 600);
        if (this.tabIndex === 0 && this.apiService.newMap.length === 0) {
            this.apiService.getNewMap();
            this.router.navigate(['']);
        }

        if (this.tabIndex === 1 && this.apiService.hotMap.length === 0) {
            this.apiService.getHotMap();
            this.router.navigate(['']);
        }

    }

    // 获取更多铺面
    getHotMore = () => this.apiService.getHotMap();
    getNewMore = () => this.apiService.getNewMap();
    getSearchMore = () => this.apiService.getSearchList();

    // 设置图片
    // setImgUrl = sid => `https://txy1.sayobot.cn/beatmaps/${sid}/covers/cover.jpg`;
    setImgUrl = sid => `https://cdn.sayobot.cn:25225/beatmaps/${sid}/covers/cover.jpg?0`;
}


