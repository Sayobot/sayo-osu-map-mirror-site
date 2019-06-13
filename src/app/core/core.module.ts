import { NgModule } from '@angular/core';
import * as META from './core.meta';

// 导入 ng 国际化插件
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    imports: [...META.MODULES, TranslateModule.forChild({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })],
    entryComponents: [...META.DIALOGS],
    declarations: [...META.COMPONENTS],
    exports: [...META.DIALOGS, ...META.COMPONENTS],
    providers: [...META.PROVIDES]
})

export class CoreModule { }
