require('./reports.less');

import {renderReportItem} from '../../components/report-item/report-item';

// for daily tasks rendering
export function renderReportsDayTasks(dataObject){
    let template = require('./reports.hbs');
    let wrapper = document.querySelector(".wrapper");
    while(wrapper.firstChild){
        wrapper.removeChild(wrapper.firstChild);
    }
    wrapper.insertAdjacentHTML("beforeend", template(dataObject));
    document.getElementById('day').className = 'tab__item white';

    let reportsChart = document.querySelector(".reports__chart");
    console.log(reportsChart);
    renderReportItem(reportsChart, dataObject.values);
    
    //let reportsChart = document.querySelector(".reports__chart");    
    //renderReportItem(reportsChart, dataObject.values);
   // console.log(dataObject.values);

/*
    if(dataObject.values == null){
        setTimeout(() => {
            let reportsChart = document.querySelector(".reports__chart");    
            renderReportItem(reportsChart, dataObject.values);
    
                let tasks = document.querySelector('.tab__item_tasks');
                tasks.onclick = event => {
                    event.preventDefault();
                    console.log("show tasks");                    
                    dataObject.eventBus.publish('DayTasks', dataObject);
                };

                let pomodoros = document.querySelector('.tab__item_pomodoros');
                pomodoros.onclick = event => {
                    event.preventDefault();
                    console.log("show pomodoros");
                    dataObject.eventBus.publish('DayPomodoros', dataObject);
                };
            
        }, 500);
    }*/
}

// for weekly tasks rendering
export function renderReportsWeekTasks(dataObject){
    let template = require('./reports.hbs');
    let wrapper = document.querySelector(".wrapper");
    while(wrapper.firstChild){
        wrapper.removeChild(wrapper.firstChild);
    }
    wrapper.insertAdjacentHTML("beforeend", template(dataObject.values));
    document.getElementById('week').className = 'tab__item white';

    let reportsChart = document.querySelector(".reports__chart");

    while(reportsChart.firstChild){
        reportsChart.removeChild(reportsChart.firstChild);
    }
    console.log(reportsChart)
    renderReportItem(reportsChart, dataObject.values);
}

// for monthly tasks rendering
export function renderReportsMonthTasks(dataObject){
    let template = require('./reports.hbs');
    let wrapper = document.querySelector(".wrapper");
    while(wrapper.firstChild){
        wrapper.removeChild(wrapper.firstChild);
    }
    wrapper.insertAdjacentHTML("beforeend", template(dataObject.values));
    document.getElementById('month').className = 'tab__item white';
}
