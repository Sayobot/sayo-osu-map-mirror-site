import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdsBoxComponent } from './ads-box.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
    declarations: [AdsBoxComponent],
    imports: [CommonModule, SwiperModule],
    exports: [AdsBoxComponent],
})
export class AdsBoxModule {}
