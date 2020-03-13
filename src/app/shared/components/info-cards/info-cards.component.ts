import { Component, OnInit } from '@angular/core';
import { MessageService } from '@app/core/service';

@Component({
    selector: 'info-cards',
    templateUrl: './info-cards.component.html',
    styleUrls: ['./info-cards.component.scss']
})
export class InfoCardsComponent implements OnInit {
    constructor(public message: MessageService) {}

    ngOnInit() {
        this.message.getNewsList();
        this.message.getSupportTotal();
    }

    get supportProgress() {
        return `RMB ${this.message.supportInfo.total} / ${this.message.supportInfo.target}`;
    }

    get progressPercent() {
        const percentage =
            this.message.supportInfo.total / this.message.supportInfo.target;
        const num = percentage > 100 ? 100 : percentage;
        return Math.floor(num * 100) + '%';
    }
}
