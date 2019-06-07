import { Routes } from '@angular/router';
import { SharedModule } from 'app/shared';

import { AdminLoginComponent } from './admin-login';
import { AdminComponent } from './admin.component';
import { AnnounceComponent } from './announce';
import { FinanceComponent } from './finance';


export const ROUTES: Routes = [
    {
        path: '',
        component: AdminComponent,
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

export const MODULES = [
    SharedModule,
];

export const COMPONENTS = [
    AdminComponent,
    AdminLoginComponent,
    AnnounceComponent,
    FinanceComponent
];
