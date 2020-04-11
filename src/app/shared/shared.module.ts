import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OwnMaterialModule } from './module/own-material.module';

import {
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

const translateConfig = {
    loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }
};

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        OwnMaterialModule,
        TranslateModule.forChild(translateConfig)
    ],
    declarations: [MusicBoxComponent, ScrollTopComponent, LoadingComponent],
    exports: [
        CommonModule,
        FormsModule,
        OwnMaterialModule,
        TranslateModule,
        MusicBoxComponent,
        ScrollTopComponent,
        LoadingComponent
    ]
})
export class SharedModule {}
