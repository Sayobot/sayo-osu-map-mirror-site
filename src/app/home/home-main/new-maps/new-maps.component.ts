import { Component, OnInit } from '@angular/core';
import { DialogService } from 'app/core/service/DialogService';
import { ApiService } from 'app/core/service/ApiService';
import { SearchService } from 'app/core/service/Search';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'new-maps',
    templateUrl: './new-maps.component.html',
    styleUrls: ['./new-maps.component.scss']
})
export class NewMapsComponent implements OnInit {

    cols: number;
    doc: Document;

    constructor(
        public dialog: DialogService,
        public apiService: ApiService,
        public search: SearchService,
    ) { }

    ngOnInit() {
        this.doc = document;
        const docResize = fromEvent(window, 'resize').pipe(
            debounceTime(300),
        );
        docResize.subscribe(() => this.setCols());
        this.setCols();
    }

    setCols() {
        const width = this.doc.documentElement.clientWidth;
        if (width > 1600) {
            this.cols = 4;
        } else if (width > 1300) {
            this.cols = 3;
        } else if (width > 1000) {
            this.cols = 2;
        } else {
            this.cols = 1;
        }
    }

    getNewMore = () => this.apiService.getNewMap();

}
