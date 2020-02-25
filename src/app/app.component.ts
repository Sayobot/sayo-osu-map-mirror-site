import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    template: `
        <router-outlet></router-outlet>
        <music-box></music-box>
    `
})
export class AppComponent {
    constructor(private translate: TranslateService) {
        translate.setDefaultLang('zh');
    }
}
