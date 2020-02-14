import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MapSidDetail } from '@app/shared/models';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    // 搜索铺面相关变量
    searchMap: Array<any> = [];
    searchEndId = 0;
    searchKey: string;
    params = ''; // 字段

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
        private router: Router
    ) {}

    search(
        key: string,
        notFound: (key: string) => void,
        openDetail: (id: number, detail: MapSidDetail) => void
    ) {
        this.resetSearchData(key);

        if (key.match(/[\d]/gi)) {
            this.getSearchInfo().subscribe((res: any) => {
                if (res.status === 0) {
                    openDetail(res.data.sid, res.data);
                } else if (res.status === -1) {
                    this.getSearchList(notFound);
                }
            });
        } else {
            this.getSearchList(notFound);
        }

        this.router.navigate(['home/search']);
    }

    resetSearchData(key: string) {
        this.searchEndId = 0;
        this.searchMap = [];
        this.searchKey = key;
    }

    setParams = (str) => (this.params = str);

    // 获取单个搜索信息
    getSearchInfo() {
        const OPTIONS = {
            params: {
                0: `${this.searchKey}`
            }
        };
        return this.http.get(this.config.detail, OPTIONS);
    }

    // 获取搜索列表
    getSearchList(notFound: (key: string) => void, type: string = 'next') {
        switch (type) {
            case 'after':
                this.searchEndId =
                    this.searchEndId === this.limit_count
                        ? 0
                        : this.searchEndId - 2 * this.limit_count;
                break;
            case 'next':
                break;
            default:
                break;
        }

        const OPTIONS = {
            params: {
                0: this.limit_count.toString(),
                1: this.searchEndId.toString(),
                2: '4',
                3: this.searchKey
            }
        };

        Object.assign(OPTIONS.params, this.params);

        return this.http
            .get(this.config.list, OPTIONS)
            .subscribe((res: any) => {
                res.status === 0
                    ? this.setResInfo(res)
                    : notFound(this.searchKey);
            });
    }

    setResInfo(data: any) {
        this.searchMap = data.data;
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

    getSearchStatis() {}
}
