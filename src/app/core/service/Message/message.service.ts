import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notice, ResponseBase } from '@app/shared/models';

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    supportInfo: any;
    notices: Notice[];

    constructor(
        @Inject('BASE_CONFIG') private config,
        private http: HttpClient
    ) {}

    // 获取支持详情
    getSupportTotal() {
        this.http
            .get(this.config.support)
            .subscribe((res: ResponseBase<any>) => {
                this.supportInfo = res.data;
            });
    }

    // 新闻列表
    getNewsList() {
        this.http
            .get(this.config.notice)
            .subscribe(
                (res: ResponseBase<Notice[]>) => (this.notices = res.data)
            );
    }
}
