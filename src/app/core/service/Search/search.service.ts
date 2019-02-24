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
    params = '';                        // 字段

    // 匹配量
    match_artist: number;
    match_creator: number;
    match_tags: number;
    match_title: number;
    match_version: number;
    results_count: number;
    time_cost: number;

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

    setParams(str) {
        this.params = str;
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
        const url = `https://api.sayobot.cn/beatmaplist?0=100&1=${this.searchEndId}&2=4&3=${this.searchKey}${this.params}`;
        this.http.get(url)
            .toPromise()
            .then((res: any) => {
                if (res.status === 0) {
                    const maps = res.data;
                    maps.forEach(element => this.searchMap.push(element));
                    this.searchEndId = res.endid;

                    this.match_artist = res.match_artist_results;
                    this.match_creator = res.match_creator_results;
                    this.match_tags = res.match_tags_results;
                    this.match_title = res.match_title_results;
                    this.match_version = res.match_version_results;
                    this.results_count = res.results;
                    this.time_cost = res.time_cost;
                } else {
                    this.dialog.notFoundMap(this.searchKey);
                }
            });
    }
}
