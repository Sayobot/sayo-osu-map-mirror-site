import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DialogService, } from 'app/core/service/DialogService';
import { CommonFnService } from 'app/core/service/CommonFnService';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    tabIndex = 0;

    // 搜索铺面相关变量
    searchMap: Array<any> = [];
    searchEndId = 0;
    searchKey: string;
    params = '';                        // 字段

    limit_count = '20';

    // 匹配量
    match_artist: number;
    match_creator: number;
    match_tags: number;
    match_title: number;
    match_version: number;
    results_count: number;
    time_cost: number;

    DETAIL_URL = 'https://api.sayobot.cn/v2/beatmapinfo?';
    MAP_LIST_URL = 'https://api.sayobot.cn/beatmaplist';

    constructor(
        public http: HttpClient,
        public dialog: DialogService,
        public commonFn: CommonFnService) { }

    // 获取搜索结果
    getSearch(key) {
        this.searchEndId = 0;
        this.searchMap = [];
        this.searchKey = key;
        this.searchKey.match(/[\d]/ig) ? this.getSearchInfo() : this.getSearchList();
        this.onSearch();
    }

    setParams = str => this.params = str;


    // 获取单个搜索信息
    getSearchInfo() {
        const OPTIONS = {
            params: {
                0: `${this.searchKey}`,
            }
        };
        this.http.get(this.DETAIL_URL, OPTIONS)
            .subscribe((res: any) => {
                if (res.status === 0) {
                    const detail = res.data;
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
        const OPTIONS = {
            params: {
                0: this.limit_count,
                1: this.searchEndId.toString(),
                2: '4',
                3: this.searchKey,
            }
        };
        Object.assign(OPTIONS.params, this.params);

        this.http.get(this.MAP_LIST_URL, OPTIONS)
            .subscribe((res: any) => {
                if (res.status === 0) {
                    const maps = res.data;
                    maps.forEach(element => this.searchMap.push(element));
                    this.setResInfo(res);
                } else {
                    this.dialog.notFoundMap(this.searchKey);
                }
            });
    }

    setResInfo(data: any) {
        this.searchEndId = data.endid;
        if (data.time_cost >= 0) {
            this.match_artist = data.match_artist_results;
            this.match_creator = data.match_creator_results;
            this.match_tags = data.match_tags_results;
            this.match_title = data.match_title_results;
            this.match_version = data.match_version_results;
            this.results_count = data.results;
            this.time_cost = data.time_cost;
        }
    }

    onSearch() {
        this.tabIndex = 3;
    }

}
