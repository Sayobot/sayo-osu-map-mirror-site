import { Component, OnInit } from '@angular/core';
import { DonationService } from '@app/core/service';
import { DonationInfo } from '@app/shared/models';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
    selector: 'donation-card',
    templateUrl: './donation-card.component.html',
    styleUrls: ['./donation-card.component.scss']
})
export class DonationCardComponent implements OnInit {
    donationInfo: DonationInfo;
    isOpen: boolean = true;

    constructor(
        private donationServe: DonationService,
        private breakpointObserver: BreakpointObserver
    ) {}

    ngOnInit() {
        this.donationServe.getDonationInfo().subscribe((res: DonationInfo) => {
            this.donationInfo = res;
        });

        this.breakpointObserver
            .observe([Breakpoints.Small, Breakpoints.Medium])
            .subscribe((result) => {
                if (result.matches) {
                    this.isOpen = false;
                }
            });
    }

    toggle() {
        this.isOpen = !this.isOpen;
    }

    get supportProgress() {
        return `RMB ${this.donationInfo.total} / ${this.donationInfo.target}`;
    }

    get progressPercent() {
        const percentage = this.donationInfo.total / this.donationInfo.target;
        const num = percentage > 100 ? 100 : percentage;
        return Math.floor(num * 100) + '%';
    }
}
