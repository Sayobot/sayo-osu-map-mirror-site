import { AfterViewInit, Component, OnInit, OnDestroy } from '@angular/core';
import Swiper from 'swiper';
import { Ad } from '@app/shared/models';
import { AdsService } from '@app/core/service';

@Component({
    selector: 'ads-box',
    templateUrl: './ads-box.component.html',
    styleUrls: ['./ads-box.component.scss']
})
export class AdsBoxComponent implements OnInit, AfterViewInit, OnDestroy {
    swiper: Swiper;
    slides: Ad[];

    timer = null;

    constructor(private ads: AdsService) {}

    ngAfterViewInit() {}

    ngOnInit() {
        this.ads.getAds().subscribe((res: Ad[]) => {
            this.slides = res;

            this.timer = setTimeout(() => {
                this.initSwiper();
            }, 0);
        });
    }

    start() {
        this.swiper.autoplay.start();
    }

    stop() {
        this.swiper.autoplay.stop();
    }

    initSwiper() {
        this.swiper = new Swiper('.swiper-container', {
            observer: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            loop: true,
            initialSlide: 0,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev'
            // }
        });
    }

    ngOnDestroy() {
        clearTimeout(this.timer);
    }
}
