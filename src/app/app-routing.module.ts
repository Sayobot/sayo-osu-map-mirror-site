import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    UpdatedLogComponent,
    SayoControlComponent,
    NotFoundPageComponent,
    HomeComponent,
    SupportComponent
} from './pages';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'update', component: UpdatedLogComponent },
    { path: 'device', component: SayoControlComponent },
    { path: 'support', component: SupportComponent },
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
    SupportComponent
];
