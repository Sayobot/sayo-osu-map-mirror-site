import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnMaterialModule } from '../core';


import { HomeRoutingModule } from './home-routing.module';
import { HomeListComponent } from './home-list/home-list.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { HomeMainComponent } from './home-main/home-main.component';


@NgModule({
    imports: [
        CommonModule,
        OwnMaterialModule,
        HomeRoutingModule
    ],
    entryComponents: [
    ],
    declarations: [
        HomeListComponent,
        HomeHeaderComponent,
        HomeFooterComponent,
        HomeMainComponent,]
})
export class HomeModule { }
