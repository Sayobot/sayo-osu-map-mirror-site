import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DialogService } from '../DialogService';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    newMap: Array<any> = [];
    newEndId = 0;
    hotMap: Array<any> = [];
    hotEndId = 0;
    support: any = {};
    totalWidth: any = '0%';
    detail: any = {};
    public: any = {};

    searchMap: Array<any> = [];
    searchEndId = 0;
    searchKey: string;

    constructor(
        public http: HttpClient,
        public dialog: DialogService
    ) { }

    // 铺面详情
    getMapDetail(id) {
        this.http.get(`https://api.sayobot.cn/beatmapinfo?1=${id}`).toPromise().then((res: any) => {
            if (res.status === 0) {
                const detail = res.data[0];
                for (const key in detail) {
                    if (detail.hasOwnProperty(key)) {
                        this.detail[key] = detail[key];
                    }
                }
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
        this.http.get(`https://api.sayobot.cn/beatmaplist?0=200&1=${this.newEndId}&2=2`).toPromise().then((res: any) => {
            if (res.status === 0) {
                const maps = res.data.filter(item => {
                    return item.order !== 0;
                });

                maps.forEach(element => {
                    this.newMap.push(element);
                });

                this.newEndId = res.endid;
            }
        });
    }

    // 获得热门图
    getHotMap() {
        this.http.get(`https://api.sayobot.cn/beatmaplist?0=200&1=${this.hotEndId}&2=1`).toPromise().then((res: any) => {
            if (res.status === 0) {
                const maps = res.data.filter(item => {
                    return item.order !== 0;
                });
                maps.forEach(element => {
                    this.hotMap.push(element);
                });
                this.hotEndId = res.endid;
            }
        });
    }

    // 获取搜索结果
    getSearch(url) {
        this.searchEndId = 0;
        this.searchMap = [];
        this.searchKey = url;
        this.getSearchInfo();
    }

    getSearchInfo() {
        this.http.get(`https://api.sayobot.cn/beatmapinfo?2=${this.searchKey}`).toPromise().then((res: any) => {
            if (res.status === 0) {

                const maps = res.data.filter(item => {
                    return item.order !== 0;
                });

                maps.forEach(element => this.searchMap.push(element));
            }
        }).catch(() => {
            this.getSearchList();
        });
    }

    getSearchList() {
        this.http.get(`https://api.sayobot.cn/beatmaplist?0=200&1=${this.searchEndId}&2=4&3=${this.searchKey}`)
            .toPromise()
            .then((res: any) => {
                if (res.status === 0) {
                    const maps = res.data.filter(item => {
                        return item.order !== 0;
                    });

                    maps.forEach(element => this.searchMap.push(element));

                    this.searchEndId = res.endid;
                } else {
                    this.dialog.notFoundMap();
                }
            });
    }

    // 获取支持详情
    getSupport() {
        this.http.get('https://api.sayobot.cn/support').toPromise().then((res: any) => {
            if (res.data) {
                for (const key in res.data) {
                    if (res.data.hasOwnProperty(key)) {
                        this.support[key] = res.data[key];
                    }
                }
                const percentage = res.data.total / res.data.target;
                const num = percentage > 100 ? 100 : percentage;
                this.totalWidth = Math.floor(num * 100) + '%';
            }
        });
    }

    // 新闻列表
    getNewsList() {
        this.http.get(`https://api.sayobot.cn/notice`).toPromise().then((res: any) => {
            for (const key in res.data) {
                if (res.data.hasOwnProperty(key)) {
                    this.public[key] = res.data[key];
                }
            }
        });
    }



}
