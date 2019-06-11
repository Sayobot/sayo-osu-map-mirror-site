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
            { path: '', redirectTo: 'new', pathMatch: 'full' },
            { path: 'new', component: NewMapComponent },
            { path: 'hot', component: HotMapComponent },
            { path: 'search', component: SearchMapComponent }
        ]
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(homeRoute)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
