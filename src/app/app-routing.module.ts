import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from 'app/core/components/not-found-page';
import { UpdatedLogComponent } from './pages';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
    {
        path: 'home',
        component: AppComponent
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
