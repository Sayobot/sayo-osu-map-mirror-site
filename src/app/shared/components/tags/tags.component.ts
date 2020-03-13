import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchService } from '@app/core/service';
import { MapDetailComponent } from '@app/core';
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

    constructor(
        private searchService: SearchService,
        public dialog: MatDialog
    ) {}

    ngOnInit() {
        this.tags = this.getTags(this.content);
    }

    getTags(content: string): string[] {
        return content ? content.split(' ') : [];
    }

    searchMap(str: string) {
        this.searchService.search(str, (id, detail) =>
            this.openMapDetailDialog(id, detail)
        );
        this.searchChange.emit();
    }

    openMapDetailDialog(id: number, detail: MapSidDetail) {
        this.dialog.open(MapDetailComponent, {
            panelClass: 'common-dialog',
            data: { id: id, content: detail }
        });
    }
}
