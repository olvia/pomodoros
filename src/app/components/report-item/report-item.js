require('./report-item.less'); 
require('../highcharts/highcharts.less'); 


export function renderReportItem(area, data){
    let template = require('./report-item.hbs');
    area.insertAdjacentHTML("beforeend", template(data));
    require('../highcharts/highcharts');
}