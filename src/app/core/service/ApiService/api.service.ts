import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DialogService } from '../DialogService';
import { CommonFnService } from '../CommonFnService';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    newMap: Array<any> = [];
    newEndId = 0;
    hotMap: Array<any> = [];
    hotEndId = 0;
    support: any = {};
    totalWidth = '0%';
    detail: any = {};
    public: any = {};

    // 搜索铺面相关变量
    searchMap: Array<any> = [];
    searchEndId = 0;
    searchKey: string;

    // 去除重复用到的set结构
    removeNewMap: Set<string> = new Set();
    removeHotMap: Set<string> = new Set();
    removeSearchMap: Set<string> = new Set();

    constructor(
        public http: HttpClient,
        public dialog: DialogService,
        public commonFn: CommonFnService
    ) { }

    // 铺面详情
    getMapDetail(id) {
        return this.http.get(`https://api.sayobot.cn/beatmapinfo?1=${id}`)
            .toPromise()
            .then((res: any) => {
                if (res.status === 0) {
                    const detail = res.data[0];
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
        this.http.get(`https://api.sayobot.cn/beatmaplist?0=100&1=${this.newEndId}&2=2`)
            .toPromise()
            .then((res: any) => {
                if (res.status === 0) {
                    const maps = res.data;
                    this.removeRepeatMap(maps, this.newMap, this.removeNewMap);
                    this.newEndId = res.endid;
                }
            });
    }

    // 获得热门图
    getHotMap() {
        this.http.get(`https://api.sayobot.cn/beatmaplist?0=50&1=${this.hotEndId}&2=1`)
            .toPromise()
            .then((res: any) => {
                if (res.status === 0) {
                    const maps = res.data;
                    this.removeRepeatMap(maps, this.hotMap, this.removeHotMap);
                    this.hotEndId = res.endid;
                }
            });
    }

    // 获取搜索结果
    getSearch(url) {
        this.searchEndId = 0;
        this.searchMap = [];
        this.searchKey = url;
        if (this.searchKey.match(/[\d]/ig)) {
            this.getSearchInfo();
        } else {
            this.getSearchList();
        }
    }

    // 获取单个搜索信息
    getSearchInfo() {
        this.http.get(`https://api.sayobot.cn/beatmapinfo?2=${this.searchKey}`).toPromise().then((res: any) => {
            if (res.status === 0) {
                const detail = res.data[0];
                const id = detail.sid;
                this.detail = this.commonFn.jsonDeepCopy(detail);
                this.dialog.mapDetail(id, detail);
            }
        }).catch(() => {
            this.getSearchList();
        });
    }

    // 获取搜索列表
    getSearchList() {
        this.http.get(`https://api.sayobot.cn/beatmaplist?0=100&1=${this.searchEndId}&2=4&3=${this.searchKey}`)
            .toPromise()
            .then((res: any) => {
                if (res.status === 0) {
                    const maps = res.data;
                    this.removeRepeatMap(maps, this.searchMap, this.removeSearchMap);
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

    // 去除重复铺面
    removeRepeatMap(maps, target, removeSet) {
        maps.forEach(element => {
            if (!removeSet.has(element.sid)) {
                target.push(element);
                removeSet.add(element.sid);
            }
        });
    }
}
