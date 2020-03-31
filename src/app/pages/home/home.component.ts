import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
        <div class="page">
            <ads-box></ads-box>
            <map-search-container></map-search-container>
            <donation-card></donation-card>
        </div>
    `
})
export class HomeComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
