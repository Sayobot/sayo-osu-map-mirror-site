import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from 'app/core/components/not-found-page';
import { UpdatedLogComponent } from './pages';

const appRoutes: Routes = [
    {
        path: 'admin',
        loadChildren: () =>
            import('./admin/admin.module').then((m) => m.AdminModule)
    },
    {
        path: 'update',
        component: UpdatedLogComponent
    },
    {
        path: 'device',
        loadChildren: () =>
            import('./device/device.module').then((m) => m.DeviceModule)
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: NotFoundPageComponent }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
