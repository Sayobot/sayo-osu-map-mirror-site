import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    template: `
        <app-header></app-header>
        <main>
            <router-outlet></router-outlet>
        </main>
        <music-box></music-box>
    `
})
export class AppComponent {
    constructor(private translate: TranslateService) {
        translate.setDefaultLang('zh');
    }
}
