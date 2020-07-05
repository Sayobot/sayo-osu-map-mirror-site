import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MapBidDetail } from '@app/shared/models';
import { MODE_TIP_CONFIG } from './mode-tip';

// TODO UI进行优化，考虑下拉框或者其他方式
@Component({
    selector: 'map-detail-level',
    templateUrl: './map-detail-level.component.html',
    styleUrls: ['./map-detail-level.component.scss'],
})
export class MapDetailLevelComponent implements OnInit {
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
        return MODE_TIP_CONFIG[map.mode];
    }
}
