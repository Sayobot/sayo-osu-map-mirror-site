import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HelpDialogComponent } from '@app/core/components';

@Component({
    template: `
        <map-search-container>
            <ads-box></ads-box>
        </map-search-container>
    `,
})
export class HomeComponent implements AfterViewInit, OnDestroy {
    timer = null;

    constructor(private dialog: MatDialog) {

    }

    get showHelpDialog() {
        return (
            !localStorage.getItem('isShow') ||
            localStorage.getItem('isShow') === 'false'
        );
    }

    ngAfterViewInit() {
        if (this.showHelpDialog) {
            this.timer = setTimeout(() => {
                this.openHelpDialog();
            }, 0);
        }
    }

    openHelpDialog() {
        this.dialog.open(HelpDialogComponent, {
            maxHeight: '98vh',
            width: '800px',
            maxWidth: '98vw',
        });
    }

    ngOnDestroy() {
        clearTimeout(this.timer);
    }
}
