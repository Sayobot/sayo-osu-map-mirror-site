import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DialogService} from 'app/core/service/DialogService';
import { ApiService } from 'app/core/service/ApiService';
import { SearchService } from 'app/core/service/Search';

@Component({
    selector: 'search-input',
    templateUrl: './search-input.component.html',
    styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
    searchKey: string;      // 搜搜关键字
    @Output() searchChange: EventEmitter<string> = new EventEmitter();

    // 搜索map
    onSearch(str) {
        this.searchKey = str.replace(/["]/ig, '').replace(/(^\s*)|(\s*$)/ig, '');
        if (this.searchKey !== '') {
            this.search.getSearch(this.searchKey);
            this.searchChange.emit(this.searchKey);
        } else {
            this.dialog.notFoundMap(str);
        }
    }

    constructor(
        public dialog: DialogService,
        public apiService: ApiService,
        public search: SearchService
    ) { }

    ngOnInit() {
    }

}
