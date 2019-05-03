import { Routes } from '@angular/router';
import { OwnMaterialModule } from '../core';
import { CommonModule } from '@angular/common';

import { HomeListComponent } from './home-list';
import { HomeHeaderComponent } from './home-header';
import { HomeFooterComponent } from './home-footer';
import { HomeMainComponent } from './home-main';

import { SearchInputComponent } from './home-main/search-input';
import { HotMapsComponent } from './home-main/hot-maps';
import { NewMapsComponent } from './home-main/new-maps';
import { SearchMapsComponent } from './home-main/search-maps';
import { InfoCardsComponent } from './home-main/info-cards';
import { PreviewCardComponent } from './home-main/preview-card';
import { MusicBoxComponent } from './music-box/music-box.component';

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
    HomeMainComponent,
    SearchInputComponent,
    HotMapsComponent,
    NewMapsComponent,
    SearchMapsComponent,
    InfoCardsComponent,
    PreviewCardComponent,
    MusicBoxComponent
];
