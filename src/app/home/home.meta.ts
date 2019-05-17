import { Routes } from '@angular/router';
import { SharedModule } from 'app/shared';

import { HomeListComponent } from './home-list.component';
import { HomeHeaderComponent } from './home-header';
import { HomeFooterComponent } from './home-footer';
import { HomeMainComponent } from './home-main';

export const ROUTES: Routes = [
    { path: '', component: HomeListComponent }
];

export const MODULES = [
    SharedModule,
];

export const COMPONENTS = [
    HomeListComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    HomeMainComponent,
];
