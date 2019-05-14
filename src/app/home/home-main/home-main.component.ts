import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'app/core/service/ApiService';
import { SearchService } from 'app/core/service/Search';
import { Router } from '@angular/router';

import { ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { NewMapsComponent } from './new-maps';
import { HotMapsComponent } from './hot-maps';
import { SearchMapsComponent } from './search-maps';

@Component({
    selector: 'home-main',
    templateUrl: './home-main.component.html',
    styleUrls: ['./home-main.component.scss']
})
export class HomeMainComponent implements OnInit, AfterViewInit {
    searchKey: string;      // 搜搜关键字
    scrollSub: any;         // 订阅

    @ViewChild(NewMapsComponent) private newMaps: NewMapsComponent;
    @ViewChild(HotMapsComponent) private hotMaps: HotMapsComponent;
    @ViewChild(SearchMapsComponent) private searchMaps: SearchMapsComponent;

    constructor(
        private apiService: ApiService,
        private search: SearchService,
        private activeRoute: ActivatedRoute,
        private router: Router,
        private el: ElementRef
    ) { }

    ngOnInit() {
        this.activeRoute
            .queryParams
            .subscribe(params => {
                if (params.search) {
                    this.search.getSearch(params.search);
                    this.onSearch();
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
            debounceTime(1000)
        );

        this.scrollSub.subscribe(res => {
            const { bottom } = box.getBoundingClientRect();

            if (bottom < 1000 && bottom > 0) {
                switch (index) {
                    case 0: this.apiService.newEndId !== 0 ? this.newMaps.getNewMore() : console.log('已经到底啦！'); break;
                    case 1: this.apiService.hotEndId !== 0 ? this.hotMaps.getHotMore() : console.log('已经到底啦！'); break;
                    case 2: this.search.searchEndId !== 0 ? this.searchMaps.getSearchMore() : console.log('已经到底啦！'); break;
                    default:
                        break;
                }
            }

        });
    }

    // 搜索map
    onSearch = () => this.search.onSearch();

    // tab选项卡改变
    onTabChange() {

        setTimeout(() => {
            this.setMainBox();
        }, 600);
        if (this.search.tabIndex === 0 && this.apiService.newMap.length === 0) {
            this.apiService.getNewMap();
            this.router.navigate(['']);
        }

        if (this.search.tabIndex === 1 && this.apiService.hotMap.length === 0) {
            this.apiService.getHotMap();
            this.router.navigate(['']);
        }

    }


}


