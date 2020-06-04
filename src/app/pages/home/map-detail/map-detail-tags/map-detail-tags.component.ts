import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'map-detail-tags',
    templateUrl: './map-detail-tags.component.html',
    styleUrls: ['./map-detail-tags.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapDetailTagsComponent implements OnInit {
    @Input() content: string;
    @Output() searchChange: EventEmitter<void> = new EventEmitter<void>();

    tags: string[];

    constructor(public dialog: MatDialog) {}

    ngOnInit() {
        this.tags = this.getTags(this.content);
    }

    getTags(content: string): string[] {
        return content ? content.split(' ') : [];
    }
}
