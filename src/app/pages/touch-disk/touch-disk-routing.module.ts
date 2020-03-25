import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TouchDiskComponent } from './touch-disk.component';

const routes: Routes = [
    {
        path: '',
        component: TouchDiskComponent,
        data: { title: '触盘控制' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class TouchDiskRoutingModule {}
