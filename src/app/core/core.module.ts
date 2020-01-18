import { NgModule } from '@angular/core';
import { DIALOG, COMPONENTS, PROVIDES, MODULES } from './core.meta';

// 导入 ng 国际化插件
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

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
export class CoreModule {}
