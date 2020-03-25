import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OwnMaterialModule } from './module/own-material.module';

import {
    TagsComponent,
    DetailInfoComponent,
    DifficultyTableComponent,
    MapDetailRadarChartComponent,
    MusicBoxComponent,
    ScrollTopComponent,
    LoadingComponent
} from './components';

// 导入 ng 国际化插件
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        OwnMaterialModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    declarations: [
        TagsComponent,
        DetailInfoComponent,
        DifficultyTableComponent,
        MapDetailRadarChartComponent,
        MusicBoxComponent,
        ScrollTopComponent,
        LoadingComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        OwnMaterialModule,
        TagsComponent,
        DetailInfoComponent,
        DifficultyTableComponent,
        MapDetailRadarChartComponent,
        MusicBoxComponent,
        ScrollTopComponent,
        LoadingComponent
    ]
})
export class SharedModule {}
