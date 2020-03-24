import { NgModule } from '@angular/core';
import { COMPONENTS, MODULES } from './shared.meta';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { MapSearchOptionsComponent } from './components/map-search-options/map-search-options.component';
import { MapSearchResultItemComponent } from './components/map-search-result-item/map-search-result-item.component';
import { MapSearchQuickbarComponent } from './components/map-search-quickbar/map-search-quickbar.component';

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
    declarations: [...COMPONENTS, MapSearchOptionsComponent, MapSearchResultItemComponent, MapSearchQuickbarComponent],
    exports: [...MODULES, ...COMPONENTS]
})
export class SharedModule {}
