import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapService } from '@service/MapService';
import { SearchService } from '@service/Search';
import { ResponsiveService } from '@service/Responsive';
import { Router } from '@angular/router';

import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';


@Component({
    selector: 'home-main',
    templateUrl: './home-main.component.html',
    styleUrls: ['./home-main.component.scss']
})
export class HomeMainComponent implements OnInit {
    searchKey: string;      // 搜搜关键字

    constructor(
        public maps: MapService,
        public search: SearchService,
        private activeRoute: ActivatedRoute,
        private router: Router,
        public responsive: ResponsiveService,
    ) { }

    ngOnInit() {
        this.activeRoute
            .queryParams
            .subscribe(params => {
                if (params.search) {
                    this.search.getSearch(params.search);
                    this.onSearch();
                } else {
                    this.maps.getMapList();
                }
            });

        const docResize = fromEvent(window, 'resize').pipe(
            throttleTime(1000),
        );
        docResize.subscribe(() => this.responsive.setCols());
        this.responsive.setCols();

        this.maps.getSupport();
        this.maps.getNewsList();
    }

    // 搜索map
    onSearch = () => this.search.onSearch();

    // 跳转搜索后 tab选项卡改变
    onTabChange() {
        if (this.search.tabIndex === 0 && this.maps.newMap.length === 0) {
            this.maps.getNewMap();
            this.router.navigate(['']);
        }

        if (this.search.tabIndex === 1 && this.maps.hotMap.length === 0) {
            this.maps.getHotMap();
            this.router.navigate(['']);
        }
    }


}


