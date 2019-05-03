export const radar_option = {
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
            // { name: 'AIM', max: 10 },
        ]
    },
    series: [{
        name: '',
        type: 'radar',
        areaStyle: { normal: {} },
        data: [
            {
                value: [],
                name: ''
            }
        ]
    }]
};

export const curve_option = {
    xAxis: {
        type: 'category',
        data: []
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [],
        type: 'line',
    }]
};
