import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { SupportModule } from './support/support.module';
import { HistoryModule } from './history/history.module';
import { AboutModule } from './about/about.module';
import { SettingModule } from './setting/setting.module';

const PAGE_MODULE = [
    HomeModule,
    SupportModule,
    HistoryModule,
    AboutModule,
    SettingModule,
];
@NgModule({
    imports: PAGE_MODULE,
    exports: PAGE_MODULE,
})
export class PagesModule {}
