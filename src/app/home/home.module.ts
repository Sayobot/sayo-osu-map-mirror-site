import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared';
import { HomeRoutingModule } from './home-routing.module';

import { HomeListComponent } from './home-list.component';
import { HomeHeaderComponent } from './home-header';
import { HomeFooterComponent } from './home-footer';
import { HomeMainComponent } from './home-main';

const homeComponents = [
    HomeListComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    HomeMainComponent,
];

@NgModule({
    imports: [
        SharedModule,
        HomeRoutingModule
    ],
    entryComponents: [
    ],
    declarations: [homeComponents]
})
export class HomeModule { }
