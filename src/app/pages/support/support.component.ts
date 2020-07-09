import { Component, OnInit } from '@angular/core';
import { SupportList2, SupportExpense, SupprtIncome } from '@app/shared/models';
import { DonationService } from '@app/core/service';

@Component({
    selector: 'app-support',
    templateUrl: './support.component.html',
    styleUrls: ['./support.component.scss'],
})
export class SupportComponent implements OnInit {
    displayedIncomeColumns: string[] = ['name', 'from', 'rmb', 'time', 'msg'];
    displayedExpenseColumns: string[] = ['item', 'cost', 'note'];
    dataSource: SupportExpense[] | SupprtIncome[] = [];
    supportList: SupportList2[];

    currentLink: string;
    currentType: string = 'income_details';

    loading: boolean;

    constructor(private donation: DonationService) {
        this.loading = true;
    }

    ngOnInit() {
        this.donation
            .getSupperV2()
            .subscribe((res: { data: SupportList2[] }) => {
                this.supportList = res.data;
                this.currentLink = res.data[0].title;
                this.dataSource = res.data[0][this.currentType];
                this.loading = false;
            });
    }

    onSelectLink() {
        this.dataSource = this.supportList.filter(
            (item: SupportList2) => item.title === this.currentLink
        )[0][this.currentType];
    }
}
