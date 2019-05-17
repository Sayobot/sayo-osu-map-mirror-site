import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DialogService } from 'app/core/service/DialogService';
import { MapDetail } from 'app/shared/models';

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
    public: any = {};

    constructor(
        @Inject('BASE_CONFIG') private config,
        private http: HttpClient,
        private dialog: DialogService,
    ) {
        this.limit = 20;
     }

    // 铺面详情
    getMapDetail(id: number) {
        const OPTIONS = {
            params: {
                0: id.toString(),
            }
        };
        this.http.get<MapDetail>(this.config.detail, OPTIONS)
            .subscribe((res: MapDetail) => {
                if (res.status === 0) {
                    this.detail = res.data;
                    this.dialog.mapDetail(id, this.detail);
                }
            });
    }

    // 铺面列表
    getMapList() {
        this.getNewMap();
        this.getHotMap();
    }

    // 获得最新图
    getNewMap() {
        const OPTIONS = {
            params: {
                0: this.limit.toString(),
                1: this.newEndId.toString(),
                2: '2'
            }
        };
        this.http.get(this.config.list, OPTIONS)
            .subscribe((res: any) => {
                if (res.status === 0) {
                    const maps = res.data;
                    maps.forEach(element => this.newMap.push(element));
                    this.newEndId = res.endid;
                }
            });
    }

    // 获得热门图
    getHotMap() {
        const OPTIONS = {
            params: {
                0: this.limit.toString(),
                1: this.hotEndId.toString(),
                2: '1'
            }
        };
        this.http.get(this.config.list, OPTIONS)
            .subscribe((res: any) => {
                if (res.status === 0) {
                    const maps = res.data;
                    maps.forEach(element => this.hotMap.push(element));
                    this.hotEndId = res.endid;
                }
            });
    }

    // 获取支持详情
    getSupport() {
        this.http.get(this.config.support).toPromise().then((res: any) => {
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
        this.http.get(this.config.notice)
            .subscribe((res: any) => this.public = res.data);
    }

}
