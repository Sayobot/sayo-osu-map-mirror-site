import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notice, ResponseBase } from '@app/shared/models';

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    supportInfo: any;
    notices: Notice[];

    constructor(private http: HttpClient) {}

    // 获取支持详情
    getSupportTotal() {
        this.http
            .get('https://api.sayobot.cn/support')
            .subscribe((res: ResponseBase<any>) => {
                this.supportInfo = res.data;
            });
    }

    // 新闻列表
    getNewsList() {
        this.http
            .get('https://api.sayobot.cn/notice')
            .subscribe(
                (res: ResponseBase<Notice[]>) => (this.notices = res.data)
            );
    }
}
