import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
    MapService,
    SearchService,
    ResponsiveService
} from '@app/core/service';

import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { MapDetailComponent } from '@app/core';
import { MapSidDetail } from '@app/shared/models';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    searchKey: string; // 搜搜关键字

    constructor(
        public maps: MapService,
        public searchService: SearchService,
        private activeRoute: ActivatedRoute,
        public responsive: ResponsiveService,
        public dialog: MatDialog
    ) {}

    ngOnInit() {
        this.activeRoute.queryParams.subscribe((params) => {
            if (params.search) {
                this.searchService.search(params.search, (id, detail) =>
                    this.openMapDetailDialog(id, detail)
                );
            }
        });

        const docResize = fromEvent(window, 'resize').pipe(throttleTime(1000));
        docResize.subscribe(() => this.responsive.setCols());
        this.responsive.setCols();

        this.maps.getSupport();
        this.maps.getNewsList();
    }

    openMapDetailDialog(id: number, detail: MapSidDetail) {
        this.dialog.open(MapDetailComponent, {
            panelClass: 'common-dialog',
            data: { id: id, content: detail }
        });
    }
}
