import { Routes } from '@angular/router';
import { NotFoundPageComponent } from 'app/core/components/not-found-page';

export const ROUTES: Routes = [
    { path: '', loadChildren: './home/home.module#HomeModule' },
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '**', component: NotFoundPageComponent }
];
