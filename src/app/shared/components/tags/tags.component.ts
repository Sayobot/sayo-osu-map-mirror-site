import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchService } from '@app/shared/service';
import { Router } from '@angular/router';
import { MapDetailComponent, NotFoundMapDialogComponent } from '@app/core';
import { MatDialog } from '@angular/material/dialog';

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
        private search: SearchService,
        private router: Router,
        public dialog: MatDialog
    ) {}

    ngOnInit() {
        this.tags = this.getTags(this.content);
    }

    getTags(content: string): string[] {
        return content ? content.split(' ') : [];
    }

    searchMap(key: string) {
        this.search.resetSearchData(key);

        if (this.search.searchKey.match(/[\d]/gi)) {
            this.search.getSearchInfo().subscribe((res: any) => {
                if (res.status === 0) {
                    const detail = res.data;
                    const id = detail.sid;
                    this.openMapDetailDialog(id, detail);
                }
                if (res.status === -1) {
                    this.getSearchList();
                }
            });
        } else {
            this.getSearchList();
        }

        this.router.navigate(['home/search']);

        this.searchChange.emit();
    }

    getSearchList() {
        this.search.getSearchList().subscribe((res: any) => {
            if (res.status === 0) {
                this.search.setResInfo(res);
            } else {
                this.openNotFoundMapDialog(this.search.searchKey);
            }
        });
    }

    openMapDetailDialog(id, detail) {
        this.dialog.open(MapDetailComponent, {
            panelClass: 'no-padding-dialog',
            maxWidth: '100vw',
            maxHeight: '100vh',
            width: '1080px',
            data: {
                id: id,
                content: detail
            }
        });
    }

    openNotFoundMapDialog(key: string) {
        this.dialog.open(NotFoundMapDialogComponent, {
            data: {
                key: key
            }
        });
    }
}
