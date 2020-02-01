import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    UpdatedLogComponent,
    SayoControlComponent,
    NotFoundPageComponent,
    HomeComponent,
    HotMapComponent,
    NewMapComponent,
    SearchMapComponent
} from './pages';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            { path: 'new', component: NewMapComponent },
            { path: 'hot', component: HotMapComponent },
            { path: 'search', component: SearchMapComponent },
            { path: '', redirectTo: 'new', pathMatch: 'full' }
        ]
    },
    { path: 'update', component: UpdatedLogComponent },
    { path: 'device', component: SayoControlComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: NotFoundPageComponent }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

export const COMPONENTS = [
    UpdatedLogComponent,
    SayoControlComponent,
    NotFoundPageComponent,
    HomeComponent,
    HotMapComponent,
    NewMapComponent,
    SearchMapComponent
];
