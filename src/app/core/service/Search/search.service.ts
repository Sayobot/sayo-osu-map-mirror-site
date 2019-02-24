import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DialogService, } from 'app/core/service/DialogService';
import { CommonFnService } from 'app/core/service/CommonFnService';

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    // 搜索铺面相关变量
    searchMap: Array<any> = [];
    searchEndId = 0;
    searchKey: string;

    constructor(
        public http: HttpClient,
        public dialog: DialogService,
        public commonFn: CommonFnService) { }

    // 获取搜索结果
    getSearch(key) {
        this.searchEndId = 0;
        this.searchMap = [];
        this.searchKey = key;
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
                this.dialog.mapDetail(id, detail);
            }
            if (res.status === -1) {
                this.getSearchList();
            }
        });
    }

    // 获取搜索列表
    getSearchList() {
        this.http.get(`https://api.sayobot.cn/beatmaplist?0=100&1=${this.searchEndId}&2=4&3=${this.searchKey}`)
            .toPromise()
            .then((res: any) => {
                if (res.status === 0) {
                    const maps = res.data;
                    maps.forEach(element => this.searchMap.push(element));
                    this.searchEndId = res.endid;
                } else {
                    this.dialog.notFoundMap(this.searchKey);
                }
            });
    }
}
