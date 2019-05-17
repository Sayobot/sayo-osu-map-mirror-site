import { Component, OnInit } from '@angular/core';
import { MapService } from 'app/core/service/MapService';
import { SearchService } from 'app/core/service/Search';

@Component({
    selector: 'turn-page',
    templateUrl: './turn-page.component.html',
    styleUrls: ['./turn-page.component.scss']
})
export class TurnPageComponent implements OnInit {

    constructor(
        private maps: MapService,
        private search: SearchService
    ) { }

    ngOnInit() {
    }

    afterPage() {
        switch (this.search.tabIndex) {
            case 0: this.maps.newEndId !== 0 ? this.maps.getNewMap('after') : console.log('已经到底啦！'); break;
            case 1: this.maps.hotEndId !== 0 ? this.maps.getHotMap('after') : console.log('已经到底啦！'); break;
            case 2: this.search.searchEndId !== 0 ? this.search.getSearchList('after') : console.log('已经到底啦！'); break;
            default:
                break;
        }
    }

    nextPage() {
        switch (this.search.tabIndex) {
            case 0: this.maps.newEndId !== 0 ? this.maps.getNewMap() : console.log('已经到底啦！'); break;
            case 1: this.maps.hotEndId !== 0 ? this.maps.getHotMap() : console.log('已经到底啦！'); break;
            case 2: this.search.searchEndId !== 0 ? this.search.getSearchList() : console.log('已经到底啦！'); break;
            default:
                break;
        }
    }

}
