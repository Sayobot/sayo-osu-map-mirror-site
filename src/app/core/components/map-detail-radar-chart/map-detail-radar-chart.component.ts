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

    @Input()
    set mapData(detail) {
        this._mapData = detail;
        if (this.radarEchart && this.curveEchart) {
            this.updateRadarOptionValue();
            this.updateCurveOptionData();
        }
    }

    radarEchart: any;
    curveEchart: any;

    constructor() { }

    ngOnInit() {
        this.radarEchart = echarts.init(document.getElementById('map-detail-radar-echart'));
        this.curveEchart = echarts.init(document.getElementById('map-detail-curve-echart'));

        this.updateRadarOptionValue();
        this.updateCurveOptionData();
    }

    updateRadarOptionValue() {
        const mapdata = this._mapData;
        const data = [
            mapdata.AR, mapdata.CS, mapdata.HP,
            mapdata.OD, mapdata.aim
        ];
        radar_option.series[0].data[0].value = data;
        this.radarEchart.setOption(radar_option);
    }

    updateCurveOptionData() {
        const mapdata = this._mapData;
        curve_option.series[0].data = mapdata.strain_aim.split('');
        this.curveEchart.setOption(curve_option);
    }
}
