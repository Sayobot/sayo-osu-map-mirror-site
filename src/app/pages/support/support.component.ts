import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SupportDetails, Supports, ResponseBase } from '@app/shared/models';

const supportFrom = ['支付宝', '微信', 'QQ红包', '其他'];

@Component({
    selector: 'app-support',
    templateUrl: './support.component.html',
    styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
    // 列表显示行
    displayedColumns: string[] = ['id', 'type', 'money', 'time'];

    // 当前选中显示
    dataSource: SupportDetails[];

    // 支持列表
    supportList: Supports[];

    // 当前选中的年月
    currentLink: string;

    constructor(
        @Inject('BASE_CONFIG') private config,
        private http: HttpClient
    ) {}

    ngOnInit() {
        this.http
            .get(this.config.supportList)
            .subscribe((res: ResponseBase<Supports[]>) => {
                this.supportList = res.data;
                this.currentLink = res.data[0].link;

                this.http
                    .get(res.data[0].link)
                    .subscribe((detail: ResponseBase<SupportDetails[]>) => {
                        this.dataSource = detail.data;
                    });
            });
    }

    onSelectLink() {
        this.http
            .get(this.currentLink)
            .subscribe((detail: ResponseBase<SupportDetails[]>) => {
                this.dataSource = detail.data;
            });
    }

    // 支持来源
    supportFrom(code: number) {
        return supportFrom[code];
    }

    getSelectListValue(link: string) {
        const arr = link.split('/');
        return arr[arr.length - 1];
    }

    back() {
        history.back();
    }
}
