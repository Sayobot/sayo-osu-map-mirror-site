import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { MapDetailContainerComponent } from './map-detail-container';
import { MapDetailTagsComponent } from './map-detail-tags/map-detail-tags.component';
import { MapDetailLevelComponent } from './map-detail-level/map-detail-level.component';
import { MapDetailInfoComponent } from './map-detail-info/map-detail-info.component';
import { MapDetailChartsComponent } from './map-detail-charts/map-detail-charts.component';

@NgModule({
    entryComponents: [MapDetailContainerComponent],
    declarations: [
        MapDetailContainerComponent,
        MapDetailTagsComponent,
        MapDetailLevelComponent,
        MapDetailInfoComponent,
        MapDetailChartsComponent
    ],
    imports: [SharedModule],
    exports: [MapDetailContainerComponent]
})
export class MapDetailModule {}
