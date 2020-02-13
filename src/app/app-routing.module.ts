import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    UpdatedLogComponent,
    SayoControlComponent,
    NotFoundPageComponent,
    HomeComponent,
    MapsBoxComponent
} from './pages';

const appRoutes: Routes = [
    { path: 'home/:type', component: HomeComponent },
    { path: 'update', component: UpdatedLogComponent },
    { path: 'device', component: SayoControlComponent },
    { path: '', redirectTo: 'home/new', pathMatch: 'full' },
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
    MapsBoxComponent
];
