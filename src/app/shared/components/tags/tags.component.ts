import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MapDetailComponent } from '@app/core/components';
import { MatDialog } from '@angular/material/dialog';
import { MapSidDetail } from '@app/shared/models';

@Component({
    selector: 'map-tags',
    templateUrl: './tags.component.html',
    styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
    @Input() content: string;
    @Output() searchChange: EventEmitter<void> = new EventEmitter<void>();

    tags: string[];

    constructor(public dialog: MatDialog) {}

    ngOnInit() {
        this.tags = this.getTags(this.content);
    }

    getTags(content: string): string[] {
        return content ? content.split(' ') : [];
    }

    openMapDetailDialog(id: number, detail: MapSidDetail) {
        this.dialog.open(MapDetailComponent, {
            panelClass: 'common-dialog',
            data: { id: id, content: detail }
        });
    }
}
