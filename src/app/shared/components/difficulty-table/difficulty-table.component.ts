import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MapBidDetail } from '@app/shared/models';

const MODE_TIP = {
    0: 'O',
    1: 'T',
    2: 'C',
    3: 'M'
};

@Component({
    selector: 'difficulty-table',
    templateUrl: './difficulty-table.component.html',
    styleUrls: ['./difficulty-table.component.scss']
})
export class DifficultyTableComponent implements OnInit {
    // 铺面难度列表
    @Input() bidDataList: MapBidDetail[];

    // 切换难度
    @Output() switch: EventEmitter<MapBidDetail> = new EventEmitter();

    // 当前选中的
    result: MapBidDetail;

    constructor() {}

    ngOnInit() {
        this.result = this.bidDataList[0];
    }

    select(bidData: MapBidDetail) {
        this.result = bidData;
        this.switch.emit(this.result);
    }

    modeTip(map: MapBidDetail): string {
        return MODE_TIP[map.mode];
    }
}
