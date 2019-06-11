import { Component, OnInit } from '@angular/core';
import { MapService } from '@service/MapService';
import { SearchService } from '@service/Search';
import { Observable } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'turn-page',
    templateUrl: './turn-page.component.html',
    styleUrls: ['./turn-page.component.scss']
})
export class TurnPageComponent implements OnInit {

    nav: Observable<NavigationEnd>;

    type: string;
    endId: number;
    timer = null;

    constructor(
        private maps: MapService,
        private search: SearchService,
        public router: Router
    ) {
        this.nav = this.router.events as Observable<NavigationEnd>;
    }

    ngOnInit() {
        this.updateType();
        this.setEndId();
        this.nav.subscribe(evt => this.updateType());
    }

    updateType() {
        const urls = location.pathname.split('/');
        this.type = urls[urls.length - 1];
    }

    setEndId() {
        switch (this.type) {
            case 'new': this.endId = this.maps.newEndId; break;
            case 'hot': this.endId = this.maps.hotEndId; break;
            case 'search': this.endId = this.search.searchEndId; break;
            default:
                break;
        }
    }

    change(type: string = '') {
        if (this.timer) {
            return;
        }

        this.timer = setTimeout(() => {
            clearTimeout(this.timer);
            this.timer = null;
            this.changePage(type);
        }, 1000);
    }

    changePage(type: string) {
        switch (this.type) {
            case 'new': this.maps.getNewMap(type); break;
            case 'hot': this.maps.getHotMap(type); break;
            case 'search': this.search.getSearchList(type); break;
            default:
                break;
        }

        this.setEndId();
    }

}
