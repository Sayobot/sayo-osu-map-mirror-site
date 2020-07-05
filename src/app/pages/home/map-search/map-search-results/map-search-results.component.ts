import {
    Component,
    OnInit,
    Input,
    ChangeDetectionStrategy,
} from '@angular/core';

@Component({
    selector: 'map-search-results',
    templateUrl: './map-search-results.component.html',
    styleUrls: ['./map-search-results.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapSearchResultsComponent implements OnInit {
    @Input() maps: any;

    constructor() {}

    ngOnInit() {}
}
