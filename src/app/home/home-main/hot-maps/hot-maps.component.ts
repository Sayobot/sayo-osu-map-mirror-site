import { Component, OnInit } from '@angular/core';
import { MapService } from 'app/core/service/MapService';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { ResponsiveService } from 'app/core/service/Responsive';

@Component({
    selector: 'hot-maps',
    templateUrl: './hot-maps.component.html',
    styleUrls: ['./hot-maps.component.scss']
})
export class HotMapsComponent implements OnInit {

    constructor(
        private maps: MapService,
        private responsive: ResponsiveService
    ) { }

    ngOnInit() {
        const docResize$ = fromEvent(window, 'resize').pipe(
            throttleTime(1000),
        );
        docResize$.subscribe(() => this.responsive.setCols());
        this.responsive.setCols();
    }

    getHotMore = () => this.maps.getHotMap();
}
