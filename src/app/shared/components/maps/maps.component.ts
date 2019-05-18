import { Component, OnInit, Input } from '@angular/core';
import { ResponsiveService } from '@service/Responsive';
import { PreMap } from 'app/shared/class/pre-map.class';

@Component({
    selector: 'app-maps',
    templateUrl: './maps.component.html',
    styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

    @Input() maps: PreMap[];

    constructor(
        public responsive: ResponsiveService
    ) { }

    ngOnInit() {

    }

}
