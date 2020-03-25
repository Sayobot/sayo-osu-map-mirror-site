import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { SupportComponent } from './support.component';
import { SupportRoutingModule } from './support-routing.module';

@NgModule({
    declarations: [SupportComponent],
    imports: [SharedModule, SupportRoutingModule]
})
export class SupportModule {}
