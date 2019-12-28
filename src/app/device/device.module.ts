import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared';
import { RouterModule } from '@angular/router';
import { DeviceComponent } from './device/device.component';

@NgModule({
    declarations: [DeviceComponent],
    imports: [SharedModule, RouterModule.forChild([{ path: '', component: DeviceComponent }])]
})
export class DeviceModule {}
