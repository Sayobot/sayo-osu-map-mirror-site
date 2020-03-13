import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
    OPTIONS_META,
    Options,
    Option,
    OptionPanel
} from './search-input.meta';
import { SearchService } from '@app/core/service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MapDetailComponent } from '@app/core';
import * as utils from '@app/utils';
import { MapSidDetail } from '@app/shared/models';

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
        public searchService: SearchService,
        private router: Router,
        public dialog: MatDialog
    ) {}

    // 搜索map
    onSearch(str: string) {
        this.searchKey = str
            .replace(/["]/gi, '')
            .replace(/(^\s*)|(\s*$)/gi, '');

        this.searchService.search(this.searchKey, (id, detail) =>
            this.openMapDetailDialog(id, detail)
        );

        this.searchChange.emit(this.searchKey);
        this.panel.close();
    }

    openMapDetailDialog(id: number, detail: MapSidDetail) {
        this.dialog.open(MapDetailComponent, {
            panelClass: 'common-dialog',
            data: { id: id, content: detail }
        });
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
        this.searchService.setParams(params);
    }

    ngOnInit() {
        this.panel = new OptionPanel();
        this.getFilterOptions();
        this.changeOptions();
    }
}
