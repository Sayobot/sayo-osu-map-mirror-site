import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'map-search-results',
    templateUrl: './map-search-results.component.html',
    styleUrls: ['./map-search-results.component.scss']
})
export class MapSearchResultsComponent implements OnInit {
    @Input() maps: any;

    constructor() {}

    ngOnInit() {}
}
