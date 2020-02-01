import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
    MapService,
    SearchService,
    ResponsiveService
} from '@app/shared/service';

import { Router } from '@angular/router';

import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { MapDetailComponent, NotFoundMapDialogComponent } from '@app/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    searchKey: string; // 搜搜关键字

    constructor(
        public maps: MapService,
        public search: SearchService,
        private activeRoute: ActivatedRoute,
        private router: Router,
        public responsive: ResponsiveService,
        public dialog: MatDialog
    ) {}

    ngOnInit() {
        this.activeRoute.queryParams.subscribe((params) => {
            if (params.search) {
                this.search.resetSearchData(params.search);

                if (this.search.searchKey.match(/[\d]/gi)) {
                    this.search.getSearchInfo().subscribe((res: any) => {
                        if (res.status === 0) {
                            const detail = res.data;
                            const id = detail.sid;
                            this.openMapDetailDialog(id, detail);
                        }
                        if (res.status === -1) {
                            this.getSearchList();
                        }
                    });
                } else {
                    this.getSearchList();
                }

                this.router.navigate(['/home/search']);
            }
        });

        const docResize = fromEvent(window, 'resize').pipe(throttleTime(1000));
        docResize.subscribe(() => this.responsive.setCols());
        this.responsive.setCols();

        this.maps.getSupport();
        this.maps.getNewsList();
    }

    getSearchList() {
        this.search.getSearchList().subscribe((res: any) => {
            if (res.status === 0) {
                this.search.setResInfo(res);
            } else {
                this.openNotFoundMapDialog(this.search.searchKey);
            }
        });
    }

    openMapDetailDialog(id, detail) {
        this.dialog.open(MapDetailComponent, {
            panelClass: 'no-padding-dialog',
            maxWidth: '100vw',
            maxHeight: '100vh',
            width: '1080px',
            data: {
                id: id,
                content: detail
            }
        });
    }

    openNotFoundMapDialog(key: string) {
        this.dialog.open(NotFoundMapDialogComponent, {
            data: {
                key: key
            }
        });
    }
}
