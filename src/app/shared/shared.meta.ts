import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { OwnMaterialModule } from './module/own-material.module';

import {
    HeaderComponent,
    FooterComponent,
    TagsComponent,
    DetailInfoComponent,
    DifficultyTableComponent,
    MapDetailRadarChartComponent,
    TurnPageComponent,
    PreviewCardComponent,
    SearchInputComponent,
    InfoCardsComponent,
    SearchStatisComponent
} from './components';

export const MODULES = [
    CommonModule,
    FormsModule,
    OwnMaterialModule,
    RouterModule,
    HttpClientModule
];

export const COMPONENTS = [
    HeaderComponent,
    FooterComponent,
    TagsComponent,
    DetailInfoComponent,
    DifficultyTableComponent,
    MapDetailRadarChartComponent,
    TurnPageComponent,
    PreviewCardComponent,
    SearchInputComponent,
    InfoCardsComponent,
    SearchStatisComponent
];
