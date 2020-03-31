import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'scroll-top',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <mat-icon
            class="scroll-top"
            (click)="scroll()"
            matTooltip="滚动到顶部"
            matTooltipPotision="above"
            >keyboard_capslock</mat-icon
        >
    `,
    styles: [
        `
            .scroll-top {
                --font-size: 3rem;

                position: fixed;
                right: 2rem;
                bottom: 3rem;
                color: #fff;
                width: var(--font-size);
                height: var(--font-size);
                font-size: var(--font-size);
                background: var(--light-theme-primary);
            }
        `
    ]
})
export class ScrollTopComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    scroll() {
        window.scrollTo(0, 0);
    }

    // !TODO 滚动到顶部的流畅动画
}
