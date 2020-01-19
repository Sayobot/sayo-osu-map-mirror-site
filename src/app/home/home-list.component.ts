import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-list',
    template: `
        <div class="home">
            <app-header></app-header>
            <home-main></home-main>
            <app-footer></app-footer>
        </div>
    `,
    styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
