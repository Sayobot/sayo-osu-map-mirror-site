import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MapSidDetail } from 'app/shared/models';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MapService {
    BASE_URL: string = 'https://api.sayobot.cn';
    BASE_LIST_URL: string = 'https://api.sayobot.cn/beatmaplist';
    BASE_INFO_URL: string = 'https://api.sayobot.cn/v2/beatmapinfo';

    limit: number;
    newMap: Array<any> = [];
    newEndId = 0;
    hotMap: Array<any> = [];
    hotEndId = 0;
    detail: any = {};

    constructor(private http: HttpClient) {
        this.limit = 20;
    }

    // 铺面详情0
    getMapDetail(id: number) {
        const OPTIONS = {
            params: {
                0: id.toString()
            }
        };
        return this.http.get<MapSidDetail>(this.BASE_INFO_URL, OPTIONS);
    }

    // 获得最新图
    getNewMap(type: string = 'next') {
        switch (type) {
            case 'after':
                this.newEndId =
                    this.newEndId === this.limit
                        ? 0
                        : this.newEndId - 2 * this.limit;
                break;
            case 'next':
                break;
            default:
                break;
        }

        const OPTIONS = {
            params: {
                0: this.limit.toString(),
                1: this.newEndId.toString(),
                2: '2'
            }
        };

        this.http.get(this.BASE_LIST_URL, OPTIONS).subscribe((res: any) => {
            if (res.status === 0) {
                this.newMap = res.data;
                this.newEndId = res.endid;
            }
        });
    }

    // 获得热门图
    getHotMap(type: string = 'next') {
        switch (type) {
            case 'after':
                this.hotEndId =
                    this.hotEndId === this.limit
                        ? 0
                        : this.hotEndId - 2 * this.limit;
                break;
            case 'next':
                break;
            default:
                break;
        }

        const OPTIONS = {
            params: {
                0: this.limit.toString(),
                1: this.hotEndId.toString(),
                2: '1'
            }
        };
        this.http.get(this.BASE_LIST_URL, OPTIONS).subscribe((res: any) => {
            if (res.status === 0) {
                this.hotMap = res.data;
                this.hotEndId = res.endid;
            }
        });
    }

    // !TODO
    getMapInfo(sid: number) {
        const params = new HttpParams({ fromString: `0=${sid}` });
        return this.http.get<any[]>(`${this.BASE_URL}/v2/beatmapinfo`, {
            responseType: 'json',
            params
        });
    }

    getSearchResult(page: number, size: number, keywords: string, params: any) {
        const query = [
            `0=${size}`,
            `1=${page}`,
            '2=4',
            `3=${keywords}`,
            ...params
        ];

        return this.getMapList('beatmaplist', query);
    }

    getNewMap2(page: number, size: number) {
        const query = [`0=${size}`, `1=${page}`, '2=2'];
        return this.getMapList('beatmaplist', query);
    }

    getHotMap2(page: number, size: number) {
        const query = [`0=${size}`, `1=${page}`, '2=1'];
        return this.getMapList('beatmaplist', query);
    }

    private getMapList(url: string, options?: any): Observable<any[]> {
        const queryUrl = `${this.BASE_URL}/${url}`;
        const params = options
            ? new HttpParams({ fromString: `${options.join('&')}` })
            : {};

        return this.http.get<any[]>(queryUrl, {
            responseType: 'json',
            params
        });
    }
}
