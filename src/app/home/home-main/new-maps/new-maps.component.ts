import { Component, OnInit } from '@angular/core';
import { MapService } from 'app/core/service/MapService';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { ResponsiveService } from 'app/core/service/Responsive';

@Component({
    selector: 'new-maps',
    templateUrl: './new-maps.component.html',
    styleUrls: ['./new-maps.component.scss']
})
export class NewMapsComponent implements OnInit {

    constructor(
        private maps: MapService,
        private responsive: ResponsiveService
    ) { }

    ngOnInit() {
        const docResize = fromEvent(window, 'resize').pipe(
            throttleTime(1000),
        );
        docResize.subscribe(() => this.responsive.setCols());
        this.responsive.setCols();
    }

    getNewMore = () => this.maps.getNewMap();

}
