import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as META from './home.meta';
import { InfoCardsComponent } from './home-main/info-cards/info-cards.component';

@NgModule({
    imports: [
        META.MODULES,
        RouterModule.forChild(META.ROUTES)
    ],
    entryComponents: [
    ],
    declarations: [META.COMPONENTS, InfoCardsComponent]
})
export class HomeModule { }
