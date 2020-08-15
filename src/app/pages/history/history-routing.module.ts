import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent } from './history.component';

const routes: Routes = [
    {
        path: '',
        component: HistoryComponent,
        data: { title: '更新日志' },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [],
})
export class HistoryRoutingModule {}
