import { NgModule } from '@angular/core';
import * as META from './shared.meta';

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
    declarations: [...META.COMPONENTS],
    exports: [...META.MODULES, ...META.COMPONENTS]
})
export class SharedModule { }
