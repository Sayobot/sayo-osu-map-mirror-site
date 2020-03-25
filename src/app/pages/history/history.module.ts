import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { HistoryComponent } from './history.component';
import { HistoryRoutingModule } from './history-routing.module';

@NgModule({
    declarations: [HistoryComponent],
    imports: [SharedModule, HistoryRoutingModule]
})
export class HistoryModule {}
