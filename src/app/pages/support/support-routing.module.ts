import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupportComponent } from './support.component';

const routes: Routes = [
    {
        path: '',
        component: SupportComponent,
        data: { title: '支持' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class SupportRoutingModule {}
