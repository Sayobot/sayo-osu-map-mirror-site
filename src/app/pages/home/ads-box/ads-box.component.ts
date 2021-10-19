import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { Ad } from '@app/shared/models';
import { AdsService } from '@app/core/service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'ads-box',
    templateUrl: './ads-box.component.html',
    styleUrls: ['./ads-box.component.scss'],
})
export class AdsBoxComponent implements OnInit, OnDestroy {
    slides: Ad[];
    timer = null;

    config: SwiperOptions = {
        observer: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        initialSlide: 0,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    };

    destory$ = new Subject();

    constructor(private ads: AdsService, public cdr: ChangeDetectorRef) {}

    ngOnInit() {
        this.ads
            .getAds()
            .pipe(takeUntil(this.destory$))
            .subscribe((res) => {
                this.slides = res.data;
            });
    }

    navTo(url: string) {
        window.open(url);
    }

    ngOnDestroy() {
        this.destory$.next();
        this.destory$.complete();
    }
}
