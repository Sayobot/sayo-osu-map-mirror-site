import { Component, OnInit } from '@angular/core';
import { DonationService } from '@app/core/service';
import { SupportList2, SupportExpense, SupprtIncome } from '@app/shared/models';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { sum } from '@app/utils/math.utils';

@Component({
    selector: 'donation-card',
    templateUrl: './donation-card.component.html',
    styleUrls: ['./donation-card.component.scss'],
})
export class DonationCardComponent implements OnInit {
    isOpen: boolean = true;
    updateAt: string;

    constructor(
        private donationServe: DonationService,
        private breakpointObserver: BreakpointObserver
    ) {}

    ngOnInit() {
        this.donationServe
            .getSupperV2()
            .subscribe((res: { last_update: string; data: SupportList2[] }) => {
                this.updateAt = res.last_update;
                this.donationServe.setDonationInfo(res.data);
            });

        this.breakpointObserver
            .observe([Breakpoints.Small, Breakpoints.Medium])
            .subscribe((result) => {
                if (result.matches) {
                    this.isOpen = false;
                }
            });
    }

    getBalance(data: SupportList2[]) {
        const income = this.getFixed2(this.getTotal(data, 'income_details'));
        const expense = this.getFixed2(this.getTotal(data, 'expense_details'));
        return income - expense;
    }

    getTotal(data: SupportList2[], type: string) {
        return data
            .map((item: SupportList2) => {
                if (item[type].length === 0) return 0;
                return item[type]
                    .map((item: SupportExpense | SupprtIncome) => {
                        if (type === 'income_details') {
                            return (item as SupprtIncome).rmb;
                        }
                        if (type === 'expense_details') {
                            return (item as SupportExpense).cost;
                        }
                    })
                    .reduce(sum);
            })
            .reduce(sum);
    }

    getAverage(data: SupportList2[]): number {
        return this.getTotal(data, 'expense_details') / data.length;
    }

    getFixed2(n: number) {
        return Number(n.toFixed(2));
    }

    toggle() {
        this.isOpen = !this.isOpen;
    }

    get supportProgress() {
        return `RMB ${this.donationServe.total} / ${this.donationServe.target}`;
    }

    get progressPercent() {
        const percentage = this.donationServe.total / this.donationServe.target;
        const num = percentage > 100 ? 100 : percentage;
        return Math.floor(num * 100) + '%';
    }

    get progressWidth() {
        const percentage = this.donationServe.total / this.donationServe.target;
        const num = percentage > 100 ? 100 : percentage;
        return percentage > 0 ? Math.floor(num * 100) + '%' : 0;
    }
}
