import { Component, OnInit } from '@angular/core';
import { UpdatedLogService } from '@app/core/service';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
    constructor(public updated: UpdatedLogService) {}

    ngOnInit() {
        this.updated.getUpdatedData();
    }
}
