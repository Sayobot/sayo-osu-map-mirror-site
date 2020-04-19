import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MessageService } from '@app/core/service';
import { Notice } from '@app/shared/models';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
    selector: 'app-announce',
    templateUrl: './announce.component.html',
    styleUrls: ['./announce.component.scss']
})
export class AnnounceComponent implements OnInit {
    messages: Notice[];
    isSmall: boolean;

    @Output() close = new EventEmitter<boolean>();

    constructor(
        private messageServe: MessageService,
        private breakpointObserver: BreakpointObserver
    ) {
        this.isSmall = false;
    }

    ngOnInit() {
        this.messageServe.getNewList().subscribe((res) => {
            this.messages = res;
        });

        this.breakpointObserver
            .observe(['(max-width: 500px)'])
            .subscribe((result) => {
                this.isSmall = result.matches;
            });
    }

    get screenSize() {
        return this.isSmall ? '100%' : '500px';
    }

    closeDrawer() {
        this.close.emit();
    }
}
