import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'difficulty-table',
    templateUrl: './difficulty-table.component.html',
    styleUrls: ['./difficulty-table.component.scss']
})
export class DifficultyTableComponent implements OnInit {
    @Input() maps: any;
    @Output() difficultChange: EventEmitter<number> = new EventEmitter();

    currentIndex = 0;

    constructor() { }

    ngOnInit() {

    }

    select(index: number) {
        this.currentIndex = index;
        this.difficultChange.emit(index);
    }

    getStar(star: number): string {
        return star.toFixed(2);
    }

    getTip(map): string {
        let tip: string;
        switch (map.mode) {
            case 0: tip = 'O'; break;
            case 1: tip = 'T'; break;
            case 2: tip = 'C'; break;
            case 3: tip = 'M'; break;
            default: break;
        }
        return tip;
    }
}
