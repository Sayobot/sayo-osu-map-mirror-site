import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { SupportModule } from './support/support.module';
import { HistoryModule } from './history/history.module';
import { TouchDiskModule } from './touch-disk/touch-disk.module';

@NgModule({
    declarations: [],
    imports: [HomeModule, SupportModule, HistoryModule, TouchDiskModule],
    exports: [HomeModule, SupportModule, HistoryModule, TouchDiskModule]
})
export class PagesModule {}
