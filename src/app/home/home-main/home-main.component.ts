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
                    this.router.navigate(['/home/search']);
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

}


