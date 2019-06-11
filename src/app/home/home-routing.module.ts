import { NgModule } from '@angular/core';
import { HomeListComponent } from './home-list.component';
import { RouterModule, Routes } from '@angular/router';

const homeRoute: Routes = [
    { path: 'home', component: HomeListComponent }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(homeRoute)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
