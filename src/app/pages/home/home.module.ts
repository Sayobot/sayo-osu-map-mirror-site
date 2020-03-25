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
    DonationCardComponent
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
        DonationCardComponent
    ],
    imports: [SharedModule, HomeRoutingModule]
})
export class HomeModule {}
