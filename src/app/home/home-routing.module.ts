import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeListComponent } from './home-list.component';
import { NewMapComponent } from './new-map/new-map.component';
import { HotMapComponent } from './hot-map/hot-map.component';
import { SearchMapComponent } from './search-map';

const homeRoute: Routes = [
    {
        path: 'home', component: HomeListComponent,
        children: [
            { path: '', redirectTo: 'newMap', pathMatch: 'full' },
            { path: 'newMap', component: NewMapComponent },
            { path: 'hotMap', component: HotMapComponent },
            { path: 'searchMap', component: SearchMapComponent }
        ]
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(homeRoute)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
