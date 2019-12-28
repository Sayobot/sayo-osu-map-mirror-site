import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared';
import { HomeRoutingModule } from './home-routing.module';

import { HomeListComponent } from './home-list.component';
import { HomeHeaderComponent } from './home-header';
import { HomeFooterComponent } from './home-footer';
import { HomeMainComponent } from './home-main';
import { NewMapComponent } from './new-map';
import { HotMapComponent } from './hot-map';
import { SearchMapComponent } from './search-map';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

const homeComponents = [
    HomeListComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    HomeMainComponent,
    NewMapComponent,
    HotMapComponent,
    SearchMapComponent
];

@NgModule({
    imports: [
        SharedModule,
        HomeRoutingModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    entryComponents: [],
    declarations: [homeComponents]
})
export class HomeModule {}
