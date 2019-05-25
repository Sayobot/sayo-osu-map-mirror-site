import { Component, OnInit } from '@angular/core';
import { MapService } from '@service/MapService';
import { SearchService } from '@service/Search';

@Component({
    selector: 'turn-page',
    templateUrl: './turn-page.component.html',
    styleUrls: ['./turn-page.component.scss']
})
export class TurnPageComponent implements OnInit {

    endId: number;
    timer = null;
    first = true;

    constructor(
        private maps: MapService,
        private search: SearchService
    ) { }

    ngOnInit() {
        this.setEndId();
    }

    setEndId() {
        switch (this.search.tabIndex) {
            case 0: this.endId = this.maps.newEndId; break;
            case 1: this.endId = this.maps.hotEndId; break;
            case 2: this.endId = this.search.searchEndId; break;
            default:
                break;
        }
    }

    change(type: string = '') {
        if (this.first) {
            this.changePage(type);
            this.first = false;
        }

        if (this.timer) {
            return;
        }

        this.timer = setTimeout(() => {
            clearTimeout(this.timer);
            this.timer = null;
            this.changePage(type);
        }, 1500);
    }

    changePage(type: string) {
        switch (this.search.tabIndex) {
            case 0: this.maps.getNewMap(type); break;
            case 1: this.maps.getHotMap(type); break;
            case 2: this.search.getSearchList(type); break;
            default:
                break;
        }

        this.setEndId();
    }

}
