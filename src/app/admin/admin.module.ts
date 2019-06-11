import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminLoginComponent } from './admin-login';
import { AdminComponent } from './admin.component';
import { AnnounceComponent } from './announce';
import { FinanceComponent } from './finance';

const adminComponents = [
    AdminComponent,
    AdminLoginComponent,
    AnnounceComponent,
    FinanceComponent
];

@NgModule({
    imports: [
        SharedModule,
        AdminRoutingModule
    ],
    entryComponents: [
    ],
    declarations: [adminComponents]
})
export class AdminModule { }
