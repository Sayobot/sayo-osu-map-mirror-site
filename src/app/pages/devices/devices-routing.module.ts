import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicesComponent } from './devices.component';

const routes: Routes = [
    {
        path: '',
        component: DevicesComponent,
        data: { title: '触盘控制' },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [],
})
export class TouchDiskRoutingModule {}
