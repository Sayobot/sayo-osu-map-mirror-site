import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from '@service/Responsive';
import { MapService } from 'app/core/service/MapService';

@Component({
    selector: 'app-new-map',
    templateUrl: './new-map.component.html',
    styleUrls: ['./new-map.component.scss']
})
export class NewMapComponent implements OnInit {

    constructor(
        public responsive: ResponsiveService,
        public maps: MapService
    ) { }

    ngOnInit() {
        if (this.maps.newMap.length === 0) {
            this.maps.getNewMap();
        }
    }

}
