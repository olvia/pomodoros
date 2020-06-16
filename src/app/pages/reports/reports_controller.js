import {eventBus} from '../../eventBus';

export default class Controller {
    constructor(model, view){
        this.model = model;
        this.view = view;

        eventBus.subscribe('DayTasks', this.model.createDailyReport.bind(this.model));
        eventBus.subscribe('DayTasks', this.view.showReportsDayTasksPage.bind(this.view));

        eventBus.subscribe('WeekTasks', this.model.createWeeklyReport.bind(this.model));
        eventBus.subscribe('WeekTasks', this.view.showWeekTasksPage.bind(this.view));
        
        eventBus.subscribe('MonthTasks', this.model.createDailyReport.bind(this.model));
        eventBus.subscribe('MonthTasks', this.view.showMonthTasksPage.bind(this.view));

        // //переход по ссылкам помидорок
        eventBus.subscribe('DayPomodoros', this.model.createDailyReport.bind(this.model));
        eventBus.subscribe('DayPomodoros', this.view.showDayPomodorosPage.bind(this.view));


        //new 12/06
        eventBus.subscribe('WeekPomodoros', this.model.createDailyReport.bind(this.model));
        eventBus.subscribe('WeekPomodoros', this.view.showWeekPomodorosPage.bind(this.view));

        eventBus.subscribe('MonthPomodoros', this.model.createDailyReport.bind(this.model));
        eventBus.subscribe('MonthPomodoros', this.view.showMonthPomodorosPage.bind(this.view));
    }
}
