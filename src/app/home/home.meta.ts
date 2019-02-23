import { Routes } from '@angular/router';

import { OwnMaterialModule } from '../core';
import { CommonModule } from '@angular/common';

import { HomeListComponent } from './home-list/home-list.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { HomeMainComponent } from './home-main/home-main.component';

export const ROUTES: Routes = [
    { path: '', component: HomeListComponent }
];

export const MODULES = [
    OwnMaterialModule,
    CommonModule
];

export const COMPONENTS = [
    HomeListComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    HomeMainComponent
];
