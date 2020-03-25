import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

type KeyWords = number | string;

@Component({
    selector: 'map-search-box',
    templateUrl: './map-search-box.component.html',
    styleUrls: ['./map-search-box.component.scss']
})
export class MapSearchBoxComponent implements OnInit {
    @Input() keyWords: KeyWords;

    @Output() search = new EventEmitter<KeyWords>();

    @Output() toggleOptionsPanel = new EventEmitter<void>();

    constructor() {}

    ngOnInit() {}

    onSearch(keyWords: KeyWords) {
        this.search.emit(keyWords);
    }

    togglePanel() {
        this.toggleOptionsPanel.emit();
    }
}
