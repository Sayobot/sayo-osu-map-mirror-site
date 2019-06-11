import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DialogService, } from '@service/DialogService';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    // 搜索铺面相关变量
    searchMap: Array<any> = [];
    searchEndId = 0;
    searchKey: string;
    params = '';                        // 字段

    limit_count = 20;

    // 匹配量
    match_artist: number;
    match_creator: number;
    match_tags: number;
    match_title: number;
    match_version: number;
    results_count: number;
    time_cost: number;

    constructor(
        @Inject('BASE_CONFIG') private config,
        private http: HttpClient,
        private dialog: DialogService,
        private router: Router
    ) { }

    // 获取搜索结果
    getSearch(key) {
        this.searchEndId = 0;
        this.searchMap = [];
        this.searchKey = key;
        this.searchKey.match(/[\d]/ig) ? this.getSearchInfo() : this.getSearchList();
        this.router.navigate(['home/search']);
    }

    setParams = str => this.params = str;


    // 获取单个搜索信息
    getSearchInfo() {
        const OPTIONS = {
            params: {
                0: `${this.searchKey}`,
            }
        };
        this.http.get(this.config.detail, OPTIONS)
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
    getSearchList(type: string = 'next') {
        switch (type) {
            case 'after':
                this.searchEndId = this.searchEndId === this.limit_count ? 0 : this.searchEndId - 2 * this.limit_count; break;
            case 'next': break;
            default: break;
        }

        const OPTIONS = {
            params: {
                0: this.limit_count.toString(),
                1: this.searchEndId.toString(),
                2: '4',
                3: this.searchKey,
            }
        };

        Object.assign(OPTIONS.params, this.params);

        this.http.get(this.config.list, OPTIONS)
            .subscribe((res: any) => {
                if (res.status === 0) {
                    this.searchMap = res.data;
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

}
