import { Component, OnInit } from '@angular/core';
import { DonationService } from '@app/core/service';
import {
    DonationInfo,
    SupportList2,
    SupportExpense,
    SupprtIncome,
} from '@app/shared/models';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

const sum = (prev: number, current: number) => prev + current;
@Component({
    selector: 'donation-card',
    templateUrl: './donation-card.component.html',
    styleUrls: ['./donation-card.component.scss'],
})
export class DonationCardComponent implements OnInit {
    donationInfo: DonationInfo;
    isOpen: boolean = true;

    total: number = 0;
    target: number = 0;
    updateAt: string;

    constructor(
        private donationServe: DonationService,
        private breakpointObserver: BreakpointObserver
    ) {}

    ngOnInit() {
        this.donationServe
            .getSupperV2()
            .subscribe((res: { last_update: string; data: SupportList2[] }) => {
                this.target = this.getAverage(res.data);
                this.updateAt = res.last_update;
                this.total = res.data[0].income_details
                    .map((item: SupprtIncome) => item.rmb)
                    .reduce(sum);
            });

        this.breakpointObserver
            .observe([Breakpoints.Small, Breakpoints.Medium])
            .subscribe((result) => {
                if (result.matches) {
                    this.isOpen = false;
                }
            });
    }

    getAverage(data: SupportList2[]): number {
        return Number(
            (
                data
                    .map((item: SupportList2) => {
                        if (item.expense_details.length === 0) return 0;
                        return item.expense_details
                            .map((item: SupportExpense) => item.cost)
                            .reduce(sum);
                    })
                    .reduce(sum) / data.length
            ).toFixed(2)
        );
    }

    toggle() {
        this.isOpen = !this.isOpen;
    }

    get supportProgress() {
        return `RMB ${this.total} / ${this.target}`;
    }

    get progressPercent() {
        const percentage = this.total / this.target;
        const num = percentage > 100 ? 100 : percentage;
        return Math.floor(num * 100) + '%';
    }
}
