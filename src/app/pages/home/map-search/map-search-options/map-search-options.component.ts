import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OPTIONS_META, Options, Option } from './options';
import { MatCheckboxChange } from '@angular/material/checkbox';

// TODO 国际化
// TODO 考虑在设置页面中添加选项的不同模式，select 下拉框，list 列表
// TODO 将选中的设置保存到 localstorage
@Component({
    selector: 'map-search-options',
    templateUrl: './map-search-options.component.html',
    styleUrls: ['./map-search-options.component.scss'],
})
export class MapSearchOptionsComponent implements OnInit {
    isShow: boolean;

    @Output() change: EventEmitter<string[]>;

    options: Array<Options>;

    constructor() {
        this.change = new EventEmitter<string[]>();
        this.options = [];
        this.isShow = true;

        Object.keys(OPTIONS_META).forEach((value: string) => {
            this.options.push(new Options(OPTIONS_META[value]));
        });
    }

    ngOnInit() {
        this.changeOption();
    }

    optionsAllChange(event: MatCheckboxChange, options: Options) {
        if (event.checked) {
            options.allSelect();
        } else {
            options.allClose();
        }
    }

    select(event: MatCheckboxChange, option: Option) {
        option.select(event.checked);
        this.changeOption();
    }

    reset() {
        this.options.forEach((options: Options) => options.reset());
        this.changeOption();
    }

    open() {
        this.isShow = true;
    }

    close() {
        this.isShow = false;
    }

    toggle() {
        this.isShow = !this.isShow;
    }

    changeOption() {
        const result = this.options.map((el) => el.key);
        this.change.emit(result);
    }
}
