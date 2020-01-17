import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from '@shared/service';
import { MapService } from '@app/shared/service/MapService';

@Component({
    selector: 'app-hot-map',
    templateUrl: './hot-map.component.html',
    styleUrls: ['./hot-map.component.scss']
})
export class HotMapComponent implements OnInit {
    constructor(public responsive: ResponsiveService, public maps: MapService) {}

    ngOnInit() {
        if (this.maps.hotMap.length === 0) {
            this.maps.getHotMap();
        }
    }
}
