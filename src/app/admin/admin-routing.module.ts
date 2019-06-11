import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminAuthGuard } from 'app/auth/admin-auth.guard';

import { AdminLoginComponent } from './admin-login';
import { AdminComponent } from './admin.component';
import { AnnounceComponent } from './announce';
import { FinanceComponent } from './finance';

const adminRoute: Routes = [
    {
        path: '',
        component: AdminComponent,
        canActivate: [AdminAuthGuard],
        children: [
            { path: '', redirectTo: 'announce' },
            { path: 'announce', component: AnnounceComponent },
            { path: 'finance', component: FinanceComponent },
        ]
    }, {
        path: 'login',
        component: AdminLoginComponent
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(adminRoute)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
