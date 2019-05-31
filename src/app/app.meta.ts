import { Routes } from '@angular/router';
import { NotFoundPageComponent } from 'app/core/components/not-found-page';

export const ROUTES: Routes = [
    { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'update', loadChildren: () => import('./update/update-log.module').then(m => m.UpdateLogModule) },
    { path: '**', component: NotFoundPageComponent }
];
