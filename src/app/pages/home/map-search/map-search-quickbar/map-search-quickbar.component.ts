import {
    Component,
    OnInit,
    EventEmitter,
    Output,
    ChangeDetectionStrategy,
} from '@angular/core';

type KeyWords = number | string;

@Component({
    selector: 'map-search-quickbar',
    templateUrl: './map-search-quickbar.component.html',
    styleUrls: ['./map-search-quickbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapSearchQuickbarComponent implements OnInit {
    @Output() quickSearch = new EventEmitter<KeyWords>();

    constructor() {}

    ngOnInit() {}

    onQuickSearch(keyWords: KeyWords) {
        this.quickSearch.emit(keyWords);
    }
}
