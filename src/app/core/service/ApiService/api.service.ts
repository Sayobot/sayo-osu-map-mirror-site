import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DialogService, } from 'app/core/service/DialogService';
import { CommonFnService } from 'app/core/service/CommonFnService';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    LIMIT = 20;

    newMap: Array<any> = [];
    newEndId = 0;
    hotMap: Array<any> = [];
    hotEndId = 0;
    support: any = {};
    totalWidth = '0%';
    detail: any = {};
    public: any = {};

    DETAIL_URL = 'https://api.sayobot.cn/v2/beatmapinfo?';

    constructor(
        public http: HttpClient,
        public dialog: DialogService,
        public commonFn: CommonFnService
    ) { }

    // 铺面详情
    getMapDetail(id) {
        this.http.get(`${this.DETAIL_URL}0=${id}`)
            .toPromise()
            .then((res: any) => {
                if (res.status === 0) {
                    const detail = res.data;
                    this.detail = this.commonFn.jsonDeepCopy(detail);
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
        this.http.get(`https://api.sayobot.cn/beatmaplist?0=${this.LIMIT}&1=${this.newEndId}&2=2`)
            .toPromise()
            .then((res: any) => {
                if (res.status === 0) {
                    const maps = res.data;
                    maps.forEach(element => this.newMap.push(element));
                    this.newEndId = res.endid;
                }
            });
    }

    // 获得热门图
    getHotMap() {
        this.http.get(`https://api.sayobot.cn/beatmaplist?0=${this.LIMIT}&1=${this.hotEndId}&2=1`)
            .toPromise()
            .then((res: any) => {
                if (res.status === 0) {
                    const maps = res.data;
                    maps.forEach(element => this.hotMap.push(element));
                    this.hotEndId = res.endid;
                }
            });
    }

    // 获取支持详情
    getSupport() {
        this.http.get('https://api.sayobot.cn/support').toPromise().then((res: any) => {
            if (res.data) {
                this.support = this.commonFn.jsonDeepCopy(res.data);
                const percentage = res.data.total / res.data.target;
                const num = percentage > 100 ? 100 : percentage;
                this.totalWidth = Math.floor(num * 100) + '%';
            }
        });
    }

    // 新闻列表
    getNewsList() {
        this.http.get(`https://api.sayobot.cn/notice`)
            .toPromise()
            .then((res: any) => this.public = this.commonFn.jsonDeepCopy(res.data));
    }

}
