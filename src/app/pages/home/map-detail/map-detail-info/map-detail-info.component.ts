import { Component, OnInit, Input } from '@angular/core';
import { Language, Genre } from './meta';

// TODO 对数据进行分组，改善 UI
// TODO 难度等 number 类型可以考虑可视化
@Component({
    selector: 'map-detail-info',
    templateUrl: './map-detail-info.component.html',
    styleUrls: ['./map-detail-info.component.scss'],
})
export class MapDetailInfoComponent implements OnInit {
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
