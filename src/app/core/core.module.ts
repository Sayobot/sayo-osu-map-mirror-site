import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from 'app/shared';
import { PagesModule } from '@app/pages/pages.module';

// 导入 ng 国际化插件
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

// 注册全局图标
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { loadSvgIconResources } from '@app/utils';

import {
    HeaderComponent,
    FooterComponent,
    HelpDialogComponent,
    AnnounceComponent,
} from './components';

const translateConfig = {
    loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
    },
};

const components = [
    HeaderComponent,
    FooterComponent,
    HelpDialogComponent,
    AnnounceComponent,
];

@NgModule({
    declarations: [...components],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        SharedModule,
        PagesModule,
        TranslateModule.forRoot(translateConfig),
    ],
    exports: [SharedModule, AppRoutingModule, ...components],
})
export class CoreModule {
    constructor(
        @Optional() @SkipSelf() parent: CoreModule,
        ir: MatIconRegistry,
        ds: DomSanitizer
    ) {
        if (parent) {
            throw new Error(
                'CoreModule already exists and cannot be loaded again!'
            );
        }

        // 注册全局自定义 svg 图标
        loadSvgIconResources(ir, ds);
    }
}
