import { Routes } from '@angular/router';
import { SharedModule } from 'app/shared';

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
    }
];

export const MODULES = [
    SharedModule,
];

export const COMPONENTS = [
    AdminComponent,
    AnnounceComponent,
    FinanceComponent
];
