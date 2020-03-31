import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import {
    MapSearchBoxComponent,
    MapSearchContainerComponent,
    MapSearchPaginnatorComponent,
    MapSearchOptionsComponent,
    MapSearchQuickbarComponent,
    MapSearchResultItemComponent,
    MapSearchResultsComponent,
    DonationCardComponent,
    AdsBoxComponent
} from './components';

@NgModule({
    declarations: [
        HomeComponent,
        MapSearchBoxComponent,
        MapSearchContainerComponent,
        MapSearchPaginnatorComponent,
        MapSearchOptionsComponent,
        MapSearchQuickbarComponent,
        MapSearchResultItemComponent,
        MapSearchResultItemComponent,
        MapSearchResultsComponent,
        DonationCardComponent,
        AdsBoxComponent
    ],
    imports: [SharedModule, HomeRoutingModule]
})
export class HomeModule {}
