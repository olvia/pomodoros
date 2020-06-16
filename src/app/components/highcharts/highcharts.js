Highcharts.chart('container', {
    data: {
        table: 'datatable'
    },
    chart: {
        type: 'column',
        backgroundColor:'transparent'
    },
    title: {
        text: ''
    },
    yAxis: {
        allowDecimals: false,
        title: {
            text: 'Units',
            style:{
                color:'#fff'
                }
        }
    },
    // xAxis: {
    //     title: {
    //         text:'dd',
    //         style:{
    //             color:'#fff'
    //         }
    //     }
    // },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                this.point.y + ' ' + this.point.name.toLowerCase();
        }
    },
    series: [{
        color: '#F75C4C',
    },
    {
        color: '#FFA841',
    },
    {
        color: '#FDDC43',
    },
    {
        color: '#1ABC9C',
    },
    {
        color: '#8DA5B8',
    }]
});