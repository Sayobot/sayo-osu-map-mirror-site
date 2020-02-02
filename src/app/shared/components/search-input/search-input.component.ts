import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
    OPTIONS_META,
    Options,
    Option,
    OptionPanel
} from './search-input.meta';
import { SearchService } from '@app/shared/service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MapDetailComponent, NotFoundMapDialogComponent } from '@app/core';
import * as utils from '@app/utils';

@Component({
    selector: 'search-input',
    templateUrl: './search-input.component.html',
    styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
    searchKey: string; // 搜搜关键字
    filterOptions: Array<Options> = []; // 选项组

    panel: OptionPanel;

    @Output() searchChange: EventEmitter<string> = new EventEmitter();

    constructor(
        public search: SearchService,
        private router: Router,
        public dialog: MatDialog
    ) {}

    // 搜索map
    onSearch(str: string) {
        this.searchKey = str
            .replace(/["]/gi, '')
            .replace(/(^\s*)|(\s*$)/gi, '');

        this.search.resetSearchData(this.searchKey);

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
        this.searchChange.emit(this.searchKey);
        this.panel.close();
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
        this.dialog.open(NotFoundMapDialogComponent, { data: { key: key } });
    }

    getFilterOptions() {
        const arr = Object.keys(OPTIONS_META);
        arr.forEach((value: string) => {
            const options = new Options(OPTIONS_META[value]);
            this.filterOptions.push(options);
        });
    }

    isSelect(event: any, option: Option) {
        option.isSelect(event.checked);
        this.changeOptions();
    }

    resetOptions() {
        this.filterOptions.forEach((options: Options) => options.reset());
        this.changeOptions();
    }

    changeOptions() {
        const arr = this.filterOptions.map((options: Options) => options.key);
        const params = utils.fromEntries(arr);
        this.search.setParams(params);
    }

    ngOnInit() {
        this.panel = new OptionPanel();
        this.getFilterOptions();
        this.changeOptions();
    }
}
