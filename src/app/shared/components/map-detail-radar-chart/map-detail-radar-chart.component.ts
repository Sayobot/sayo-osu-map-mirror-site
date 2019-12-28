import { Component, OnInit, Input } from '@angular/core';
declare const echarts: any;
import { radar_option, curve_option } from './models';

@Component({
    selector: 'map-detail-radar-chart',
    templateUrl: './map-detail-radar-chart.component.html',
    styleUrls: ['./map-detail-radar-chart.component.scss']
})
export class MapDetailRadarChartComponent implements OnInit {
    private _mapData: any;
    aim: number;
    speed: number;
    star: number;
    rangeValue: number;

    @Input()
    set mapData(detail) {
        this._mapData = detail;
        if (this.radarEchart && this.curveEchart) {
            this.update();
        }
    }

    radarEchart: any;
    curveEchart: any;

    constructor() {}

    ngOnInit() {
        this.radarEchart = echarts.init(document.getElementById('map-detail-radar-echart'));
        this.curveEchart = echarts.init(document.getElementById('map-detail-curve-echart'));
        this.update();
    }

    update() {
        this.updateRadarOptionValue();
        this.updateCurveOptionData();
        this.setRange();
    }

    setRange() {
        this.star = this._mapData.star;
        this.aim = this._mapData.aim;
        this.speed = this.star - this.aim;
        this.rangeValue = 100 * (this.aim / this.star);
    }

    updateRadarOptionValue() {
        const mapdata = this._mapData;
        const data = [mapdata.AR, mapdata.CS, mapdata.HP, mapdata.OD];
        radar_option.series[0].data[0].value = data;
        this.radarEchart.setOption(radar_option);
    }

    updateCurveOptionData() {
        const mapdata = this._mapData;
        const aim = mapdata.strain_aim.split('');
        const speed = mapdata.strain_speed.split('');
        const total = aim.map((count, index) => Number(count) + Number(speed[index]));
        curve_option.series[0].data = total;
        this.curveEchart.setOption(curve_option);
    }
}
