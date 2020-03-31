import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { SupportModule } from './support/support.module';
import { HistoryModule } from './history/history.module';
import { TouchDiskModule } from './touch-disk/touch-disk.module';
import { AboutModule } from './about/about.module';
import { SettingModule } from './setting/setting.module';

@NgModule({
    declarations: [],
    imports: [
        HomeModule,
        SupportModule,
        HistoryModule,
        TouchDiskModule,
        AboutModule,
        SettingModule
    ],
    exports: [
        HomeModule,
        SupportModule,
        HistoryModule,
        TouchDiskModule,
        AboutModule,
        SettingModule
    ]
})
export class PagesModule {}
