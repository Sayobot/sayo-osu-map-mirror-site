import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {
        path: 'home',
        loadChildren: () =>
            import('./pages/home/home.module').then((m) => m.HomeModule)
    },
    {
        path: 'history',
        loadChildren: () =>
            import('./pages/history/history.module').then(
                (m) => m.HistoryModule
            )
    },
    {
        path: 'touchDisk',
        loadChildren: () =>
            import('./pages/touch-disk/touch-disk.module').then(
                (m) => m.TouchDiskModule
            )
    },
    {
        path: 'support',
        loadChildren: () =>
            import('./pages/support/support.module').then(
                (m) => m.SupportModule
            )
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
