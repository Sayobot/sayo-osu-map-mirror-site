import { Component, OnInit, Input } from '@angular/core';

interface Statis {
    time_cost: number;
    results: number;
    match_title_results: number;
    match_artist_results: number;
    match_creator_results: number;
    match_version_results: number;
    match_tags_results: number;
}

@Component({
    selector: 'search-statis',
    templateUrl: './search-statis.component.html',
    styleUrls: ['./search-statis.component.scss']
})
export class SearchStatisComponent implements OnInit {
    @Input() statis: Statis;

    constructor() {}

    ngOnInit() {}
}
