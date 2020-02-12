import { Component, OnInit } from '@angular/core';
import { ResponsiveService, SearchService } from '@app/shared/service';

@Component({
    selector: 'search-statis',
    templateUrl: './search-statis.component.html',
    styleUrls: ['./search-statis.component.scss']
})
export class SearchStatisComponent implements OnInit {
    constructor(
        public responsive: ResponsiveService,
        public search: SearchService
    ) {}

    ngOnInit() {}
}
