import { Component, OnInit } from '@angular/core';
import { UpdatedLogService } from '@app/core/service';

@Component({
    selector: 'app-history',
    template: `
        <div class="page" *ngIf="updated?.updateData">
            <mat-list>
                <ng-container *ngFor="let updata of updated?.updateData">
                    <div mat-subheader>{{ updata.time }}</div>
                    <mat-list-item *ngFor="let item of updata.detail">
                        <div mat-line>{{ item }}</div>
                    </mat-list-item>
                    <mat-divider></mat-divider>
                </ng-container>
            </mat-list>
        </div>
    `
})
export class HistoryComponent implements OnInit {
    constructor(public updated: UpdatedLogService) {}

    ngOnInit() {
        this.updated.getUpdatedData();
    }
}
