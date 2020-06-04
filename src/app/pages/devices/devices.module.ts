import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { DevicesComponent } from './devices.component';
import { TouchDiskRoutingModule } from './devices-routing.module';

@NgModule({
    declarations: [DevicesComponent],
    imports: [SharedModule, TouchDiskRoutingModule],
})
export class DevicesModule {}
