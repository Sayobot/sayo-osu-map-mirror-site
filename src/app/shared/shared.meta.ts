import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OwnMaterialModule } from './module/own-material.module';

import {
    TagsComponent,
    DetailInfoComponent,
    DifficultyTableComponent,
    MapDetailRadarChartComponent,
    TurnPageComponent,
    PreviewCardComponent,
    SearchInputComponent,
    InfoCardsComponent,
    MusicBoxComponent
} from './components';

export const MODULES = [
    CommonModule,
    OwnMaterialModule,
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule
];

export const COMPONENTS = [
    TagsComponent,
    DetailInfoComponent,
    DifficultyTableComponent,
    MapDetailRadarChartComponent,
    TurnPageComponent,
    PreviewCardComponent,
    SearchInputComponent,
    InfoCardsComponent,
    MusicBoxComponent
];
