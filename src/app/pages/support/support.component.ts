import { Component, OnInit } from '@angular/core';
import { SupportDetails, Supports } from '@app/shared/models';
import { DonationService } from '@app/core/service';

@Component({
    selector: 'app-support',
    templateUrl: './support.component.html',
    styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
    displayedColumns: string[] = ['id', 'type', 'money', 'time'];
    dataSource: SupportDetails[];
    supportList: Supports[];
    currentLink: string;

    loading: boolean;

    constructor(private donation: DonationService) {
        this.loading = true;
    }

    ngOnInit() {
        this.donation.getSupperList().subscribe((res: Supports[]) => {
            const firstLink = res[0].link;

            this.supportList = res;
            this.currentLink = firstLink;
            this.getSupportDetasil(firstLink);
        });
    }

    getSupportDetasil(link: string) {
        this.loading = true;
        this.donation
            .getSupperDetail(link)
            .subscribe((res: SupportDetails[]) => {
                this.dataSource = res;
                this.loading = false;
            });
    }

    onSelectLink() {
        this.getSupportDetasil(this.currentLink);
    }

    supportFrom(code: number) {
        const supportFrom = ['支付宝', '微信', 'QQ红包', '其他'];
        return supportFrom[code];
    }

    getSelectListValue(link: string) {
        const arr = link.split('/');
        return arr[arr.length - 1];
    }
}
