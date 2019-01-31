import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-support-sayobot',
    templateUrl: './support-sayobot.component.html',
    styleUrls: ['./support-sayobot.component.scss']
})
export class SupportSayobotComponent implements OnInit {

    supportData: any = [];

    constructor(
        public http: HttpClient,
    ) { }

    ngOnInit() {
        this.getSupportList();
    }

    // 获取支持者月份列表
    getSupportList() {
        this.http.get(`https://api.sayobot.cn/static/supportlist`)
            .toPromise()
            .then((res: any) => {
                this.supportData = res.data;
                this.getSupportDetail();
            });
    }

    // 获取支持者详情列表
    getSupportDetail() {
        this.supportData.forEach(element => {
            this.http.get(element.link)
                .toPromise()
                .then((res: any) => {
                    const arr = res.data.sort((a, b) => {
                        return b.money - a.money;
                    })
                    element['detail'] = arr;
                });
        });
    }

    // 支持来自哪里 0是支付宝，1是微信，2是QQ红包
    isFrom(type) {
        let str: string;
        switch (type) {
            case 0: str = '支付宝'; break;
            case 1: str = '微信'; break;
            case 2: str = 'QQ红包'; break;
            default:
                break;
        }
        return str;
    }
}
