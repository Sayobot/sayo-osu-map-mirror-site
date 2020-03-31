import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
    declarations: [AboutComponent],
    imports: [SharedModule, AboutRoutingModule]
})
export class AboutModule {}
