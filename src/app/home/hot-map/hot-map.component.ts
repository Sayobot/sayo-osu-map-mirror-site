import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from '@service/Responsive';
import { MapService } from 'app/core/service/MapService';

@Component({
    selector: 'app-hot-map',
    templateUrl: './hot-map.component.html',
    styleUrls: ['./hot-map.component.scss']
})
export class HotMapComponent implements OnInit {

    constructor(
        public responsive: ResponsiveService,
        public maps: MapService
    ) { }

    ngOnInit() {
    }

}
