import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(
        public http: HttpClient
    ) { }

    // 铺面详情
    getMapDetail(): Observable<any> {
        return this.http.get('https://v1.hitokoto.cn/');
    }

    // 铺面列表
    getMapList() {

    }

    // 公告列表
    getPublic() {

    }

    // 新闻列表
    getNewsList() {

    }

    // 获取歌曲
    getMusic() {

    }
}
