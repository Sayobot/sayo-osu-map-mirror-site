import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MapSidDetail } from 'app/shared/models';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
    providedIn: 'root'
})
export class MapService {
    limit: number;

    newMap: Array<any> = [];
    newEndId = 0;
    hotMap: Array<any> = [];
    hotEndId = 0;
    support: any = {};
    totalWidth = '0%';
    detail: any = {};
    publics: any = [];

    constructor(
        @Inject('BASE_CONFIG') private config,
        private http: HttpClient,
        private dialog: MatDialog
    ) {
        this.limit = 20;
    }

    // 铺面详情
    getMapDetail(id: number) {
        const OPTIONS = {
            params: {
                0: id.toString()
            }
        };
        return this.http.get<MapSidDetail>(this.config.detail, OPTIONS);
    }

    // 获得最新图
    getNewMap(type: string = 'next') {
        switch (type) {
            case 'after':
                this.newEndId =
                    this.newEndId === this.limit
                        ? 0
                        : this.newEndId - 2 * this.limit;
                break;
            case 'next':
                break;
            default:
                break;
        }

        const OPTIONS = {
            params: {
                0: this.limit.toString(),
                1: this.newEndId.toString(),
                2: '2'
            }
        };

        this.http.get(this.config.list, OPTIONS).subscribe((res: any) => {
            if (res.status === 0) {
                this.newMap = res.data;
                this.newEndId = res.endid;
            }
        });
    }

    // 获得热门图
    getHotMap(type: string = 'next') {
        switch (type) {
            case 'after':
                this.hotEndId =
                    this.hotEndId === this.limit
                        ? 0
                        : this.hotEndId - 2 * this.limit;
                break;
            case 'next':
                break;
            default:
                break;
        }

        const OPTIONS = {
            params: {
                0: this.limit.toString(),
                1: this.hotEndId.toString(),
                2: '1'
            }
        };
        this.http.get(this.config.list, OPTIONS).subscribe((res: any) => {
            if (res.status === 0) {
                this.hotMap = res.data;
                this.hotEndId = res.endid;
            }
        });
    }

    // 获取支持详情
    getSupport() {
        this.http
            .get(this.config.support)
            .toPromise()
            .then((res: any) => {
                if (res.data) {
                    this.support = res.data;
                    const percentage = res.data.total / res.data.target;
                    const num = percentage > 100 ? 100 : percentage;
                    this.totalWidth = Math.floor(num * 100) + '%';
                }
            });
    }

    // 新闻列表
    getNewsList() {
        this.http
            .get(this.config.notice)
            .subscribe((res: any) => (this.publics = res.data));
    }
}
