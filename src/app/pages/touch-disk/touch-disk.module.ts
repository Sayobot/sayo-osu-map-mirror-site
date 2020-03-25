import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { TouchDiskComponent } from './touch-disk.component';
import { TouchDiskRoutingModule } from './touch-disk-routing.module';

@NgModule({
    declarations: [TouchDiskComponent],
    imports: [SharedModule, TouchDiskRoutingModule]
})
export class TouchDiskModule {}
