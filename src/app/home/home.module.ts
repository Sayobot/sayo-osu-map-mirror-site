import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnMaterialModule } from "../own-material/own-material.module";


import { HomeRoutingModule } from './home-routing.module';
import { HomeListComponent } from './home-list/home-list.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { SupportSayobotComponent } from './dialog/support-sayobot/support-sayobot.component';
import { HelpDialogComponent } from './dialog/help-dialog/help-dialog.component';
import { AboutDialogComponent } from './dialog/about-dialog/about-dialog.component';
import { MapDetailComponent } from './dialog/map-detail/map-detail.component';

@NgModule({
    imports: [
        CommonModule,
        OwnMaterialModule,
        HomeRoutingModule
    ],
    entryComponents: [
        SupportSayobotComponent,
        HelpDialogComponent,
        AboutDialogComponent,
        MapDetailComponent
    ],
    declarations: [
        HomeListComponent,
        HomeHeaderComponent,
        HomeFooterComponent,
        HomeMainComponent,
        SupportSayobotComponent,
        HelpDialogComponent,
        AboutDialogComponent,
        MapDetailComponent]
})
export class HomeModule { }
