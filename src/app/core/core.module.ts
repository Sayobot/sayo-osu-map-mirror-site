import { NgModule, Optional, SkipSelf } from '@angular/core';
import { DIALOG, COMPONENTS, PROVIDES, MODULES } from './core.meta';

// 导入 ng 国际化插件
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { loadSvgIconResources } from '@app/utils';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    imports: [
        ...MODULES,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    entryComponents: [...DIALOG],
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS],
    providers: [...PROVIDES]
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
