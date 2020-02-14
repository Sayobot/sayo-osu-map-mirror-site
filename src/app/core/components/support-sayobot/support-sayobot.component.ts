import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SupportDetails, Supports, ResponseBase } from '@app/shared/models';

const supportFrom = ['支付宝', '微信', 'QQ红包'];

@Component({
    selector: 'app-support-sayobot',
    templateUrl: './support-sayobot.component.html',
    styleUrls: ['./support-sayobot.component.scss']
})
export class SupportSayobotComponent implements OnInit {
    supportData: Supports[] = [];

    constructor(
        @Inject('BASE_CONFIG') private config,
        private http: HttpClient
    ) {}

    ngOnInit() {
        this.http
            .get(this.config.supportList)
            .subscribe((res: ResponseBase<Supports[]>) => {
                this.supportData = res.data;
                this.getSupportDetail();
            });
    }

    // 获取支持者详情列表
    getSupportDetail() {
        this.supportData.forEach((el: Supports) => {
            this.http
                .get(el.link)
                .subscribe((res: ResponseBase<SupportDetails[]>) => {
                    el['detail'] = res.data.sort((a, b) => b.money - a.money);
                });
        });
    }

    // 支持来源
    supportFrom(code: number) {
        return supportFrom[code];
    }
}
