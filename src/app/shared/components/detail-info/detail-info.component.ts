import { Component, OnInit, Input } from '@angular/core';
import { Language, Genre } from './detail-info.meta';

@Component({
    selector: 'detail-info',
    templateUrl: './detail-info.component.html',
    styleUrls: ['./detail-info.component.scss']
})
export class DetailInfoComponent implements OnInit {
    @Input() detail: any;
    @Input() info: any;

    constructor() {}

    ngOnInit() {}

    getLanguage(index: string) {
        return Language[index];
    }

    getGenre(index: string) {
        return Genre[index];
    }

    getDate(date: number) {
        const dateObj = new Date(date * 1000);
        const year = dateObj.getFullYear();
        const mouth = dateObj.getMonth() + 1;
        const hour = dateObj.getHours();
        return `${year} - ${mouth} - ${hour}`;
    }
}
