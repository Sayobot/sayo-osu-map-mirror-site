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

    DETAIL_URL = 'https://api.sayobot.cn/v2/beatmapinfo?';

    constructor(
        public http: HttpClient,
        public dialog: DialogService,
        public commonFn: CommonFnService) { }

    // 获取搜索结果
    getSearch(key) {
        if (key !== this.searchKey) {
            this.resetSearch(key);
        }

        this.searchKey.match(/[\d]/ig) ? this.getSearchInfo() : this.getSearchList();
    }

    setParams = str => this.params = str;


    // 获取单个搜索信息
    getSearchInfo() {
        this.http.get(`${this.DETAIL_URL}0=${this.searchKey}`)
            .toPromise()
            .then((res: any) => {
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
        this.http.get(`https://api.sayobot.cn/beatmaplist?0=100&1=${this.searchEndId}&2=4&3=${this.searchKey}${this.params}`)
            .toPromise()
            .then((res: any) => {
                if (res.status === 0) {
                    const maps = res.data;
                    maps.forEach(element => this.searchMap.push(element));
                    if (this.searchEndId === 0) {
                        this.setResInfo(res);
                    }

                } else {
                    this.dialog.notFoundMap(this.searchKey);
                }
            });
    }

    setResInfo(data) {
        this.searchEndId = data.endid;
        this.match_artist = data.match_artist_results;
        this.match_creator = data.match_creator_results;
        this.match_tags = data.match_tags_results;
        this.match_title = data.match_title_results;
        this.match_version = data.match_version_results;
        this.results_count = data.results;
        this.time_cost = data.time_cost;
    }

    resetSearch(key) {
        this.searchEndId = 0;
        this.searchMap = [];
        this.searchKey = key;
    }
}
