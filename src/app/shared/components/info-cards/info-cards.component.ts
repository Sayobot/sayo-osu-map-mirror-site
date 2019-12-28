import { Component, OnInit } from '@angular/core';
import { MapService } from '@service/MapService';

@Component({
    selector: 'info-cards',
    templateUrl: './info-cards.component.html',
    styleUrls: ['./info-cards.component.scss']
})
export class InfoCardsComponent implements OnInit {
    constructor(public maps: MapService) {}

    ngOnInit() {}
}
