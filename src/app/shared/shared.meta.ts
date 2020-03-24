import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { OwnMaterialModule } from './module/own-material.module';

import {
    TagsComponent,
    DetailInfoComponent,
    DifficultyTableComponent,
    MapDetailRadarChartComponent,
    InfoCardsComponent,
    MusicBoxComponent,
    ScrollTopComponent,
    MapSearchContainerComponent,
    MapSearchBoxComponent,
    MapSearchResultsComponent,
    MapSearchPaginnatorComponent,
    MapSearchOptionsComponent,
    MapSearchResultItemComponent,
    MapSearchQuickbarComponent
} from './components';

export const MODULES = [
    CommonModule,
    FormsModule,
    OwnMaterialModule,
    RouterModule,
    HttpClientModule
];

export const COMPONENTS = [
    TagsComponent,
    DetailInfoComponent,
    DifficultyTableComponent,
    MapDetailRadarChartComponent,
    InfoCardsComponent,
    MusicBoxComponent,
    ScrollTopComponent,
    MapSearchContainerComponent,
    MapSearchBoxComponent,
    MapSearchResultsComponent,
    MapSearchPaginnatorComponent,
    MapSearchOptionsComponent,
    MapSearchResultItemComponent,
    MapSearchQuickbarComponent
];
