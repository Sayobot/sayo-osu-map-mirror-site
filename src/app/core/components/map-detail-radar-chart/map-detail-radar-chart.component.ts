import { Component, OnInit } from '@angular/core';
declare const echarts: any;

const radar_option = {
    tooltip: {},
    radar: {
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: [
            { name: 'AR', max: 10 },
            { name: 'CS', max: 10 },
            { name: 'HP', max: 10 },
            { name: 'OD', max: 10 },
            { name: 'AIM', max: 10 },
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        areaStyle: { normal: {} },
        data: [
            {
                value: [1, 2, 3, 4, 5],
                name: '难度1'
            }
        ]
    }]
};

const curve_option = {
    xAxis: {
        type: 'category',
        data: []
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [1, 1, 2, 3, 4, 3, 3, 4, 3, 3, 5, 4, 3, 4, 3, 3, 3, 5, 5, 3, 4, 2, 3, 4, 1
            , 4, 4, 3, 4, 5, 2, 3, 4, 4, 3, 3, 3, 4, 4, 4, 5, 5, 3, 1, 2, 4, 5, 1, 1, 1, 1,
            1, 1, 2, 3, 4, 3, 3, 4, 3, 3, 5, 4, 3, 4, 3, 3, 3, 5, 5, 3, 4, 2, 3, 4, 1
            , 4, 4, 3, 4, 5, 2, 3, 4, 4, 3, 3, 3, 4, 4, 4, 5, 5, 3, 1, 2, 4, 5, 1, 1, 1, 1],
        type: 'line',
    }]
};

@Component({
    selector: 'map-detail-radar-chart',
    templateUrl: './map-detail-radar-chart.component.html',
    styleUrls: ['./map-detail-radar-chart.component.scss']
})
export class MapDetailRadarChartComponent implements OnInit {

    radarEchart: any;
    curveEchart: any;

    constructor() { }

    ngOnInit() {
        this.radarEchart = echarts.init(document.getElementById('map-detail-radar-echart'));
        this.radarEchart.setOption(radar_option);

        this.curveEchart = echarts.init(document.getElementById('map-detail-curve-echart'));
        this.curveEchart.setOption(curve_option);
    }

}
