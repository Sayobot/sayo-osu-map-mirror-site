import { NgModule } from '@angular/core';
import { COMPONENTS, MODULES } from './shared.meta';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { SearchStatisComponent } from './components/search-statis/search-statis.component';

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
    declarations: [...COMPONENTS, FooterComponent, SearchStatisComponent],
    exports: [...MODULES, ...COMPONENTS]
})
export class SharedModule {}
