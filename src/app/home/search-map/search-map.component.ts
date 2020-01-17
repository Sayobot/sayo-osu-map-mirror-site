import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from '@app/shared/service';
import { SearchService } from '@app/shared/service/Search';

@Component({
    selector: 'app-search-map',
    templateUrl: './search-map.component.html',
    styleUrls: ['./search-map.component.scss']
})
export class SearchMapComponent implements OnInit {
    constructor(public responsive: ResponsiveService, public search: SearchService) {}

    ngOnInit() {}
}
