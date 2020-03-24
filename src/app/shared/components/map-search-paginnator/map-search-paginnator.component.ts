import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'map-search-paginnator',
    templateUrl: './map-search-paginnator.component.html',
    styleUrls: ['./map-search-paginnator.component.scss']
})
export class MapSearchPaginnatorComponent implements OnInit {
    @Output() change = new EventEmitter<string>();

    constructor() {}

    ngOnInit() {}

    afterPage() {
        this.change.emit('after');
    }

    nextPage() {
        this.change.emit('next');
    }
}
