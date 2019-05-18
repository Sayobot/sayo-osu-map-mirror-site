import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchService } from '@service/Search';

@Component({
    selector: 'map-tags',
    templateUrl: './tags.component.html',
    styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

    @Input() content: string;
    @Output() searchChange: EventEmitter<void> = new EventEmitter<void>();

    tags: string[];

    constructor(
        private search: SearchService,
    ) {

    }

    ngOnInit() {
        this.tags = this.getTags(this.content);
    }

    getTags(content: string): string[] {
        return content ? content.split(' ') : [];
    }

    searchMap(key: string) {
        this.search.getSearch(key);
        this.searchChange.emit();
    }

}
