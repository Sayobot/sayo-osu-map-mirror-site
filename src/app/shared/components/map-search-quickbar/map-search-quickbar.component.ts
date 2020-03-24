import { Component, OnInit, EventEmitter, Output } from '@angular/core';

type KeyWords = number | string;

@Component({
    selector: 'map-search-quickbar',
    templateUrl: './map-search-quickbar.component.html',
    styleUrls: ['./map-search-quickbar.component.scss']
})
export class MapSearchQuickbarComponent implements OnInit {
    @Output() quickSearch = new EventEmitter<KeyWords>();

    constructor() {}

    ngOnInit() {}

    onQuickSearch(keyWords: KeyWords) {
        this.quickSearch.emit(keyWords);
    }
}
