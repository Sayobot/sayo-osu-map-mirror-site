import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
    MapSidDetail,
    SearchMapResult,
    ResponseBase
} from '@app/shared/models';
import { Router } from '@angular/router';

const MAP_SIZE = 20;

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    // 搜索铺面相关变量
    searchResult: SearchMapResult;
    searchMap: MapSidDetail[] = [];
    searchEndId = 0;
    searchKey: string;
    params = {}; // 字段

    constructor(
        @Inject('BASE_CONFIG') private config,
        private http: HttpClient,
        private router: Router
    ) {}

    search(
        key: string,
        openDetail: (id: number, detail: MapSidDetail) => void
    ) {
        this.resetSearchData(key);

        if (key.match(/[\d]/gi)) {
            this.getSearchInfo().subscribe(
                (res: ResponseBase<MapSidDetail>) => {
                    if (res.status === 0) {
                        openDetail(res.data.sid, res.data);
                    } else if (res.status === -1) {
                        this.getSearchList();
                    }
                }
            );
        } else {
            this.getSearchList();
        }

        this.router.navigate(['home/search']);
    }

    /**
     * 初始化搜索关键字
     * @param key 搜索关键字
     */
    resetSearchData(key: string) {
        this.searchEndId = 0;
        this.searchMap = [];
        this.searchResult = null;
        this.searchKey = key;
    }

    // 设置搜索参数
    setParams = (str: Object) => (this.params = str);

    // 获取单个搜索信息
    getSearchInfo() {
        return this.http.get(this.config.detail, {
            params: { 0: `${this.searchKey}` }
        });
    }

    // 获取搜索列表
    getSearchList(type: string = 'next') {
        switch (type) {
            case 'after':
                this.searchEndId =
                    this.searchEndId === MAP_SIZE
                        ? 0
                        : this.searchEndId - 2 * MAP_SIZE;
                break;
            case 'next':
                break;
            default:
                break;
        }

        const OPTIONS = {
            params: {
                0: MAP_SIZE.toString(),
                1: this.searchEndId.toString(),
                2: '4',
                3: this.searchKey
            }
        };

        Object.assign(OPTIONS.params, this.params);

        return this.http
            .get(this.config.list, OPTIONS)
            .subscribe((res: SearchMapResult) => {
                if (res.status === 0) {
                    this.setResInfo(res);
                }
            });
    }

    // 设置搜索信息
    setResInfo(data: SearchMapResult) {
        this.searchMap = data.data;
        this.searchEndId = data.endid;
        this.searchResult = data;
    }

    // 提取出搜索统计信息
    getSearchStatis() {
        const result = this.searchResult;
        return {
            time_cost: result.time_cost,
            match_title_results: result.match_title_results,
            match_artist_results: result.match_artist_results,
            match_creator_results: result.match_creator_results,
            match_version_results: result.match_version_results,
            match_tags_results: result.match_tags_results
        };
    }
}
