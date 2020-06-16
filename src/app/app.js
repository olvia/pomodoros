require('assets/less/main.less'); 
require('./components/header/header');

import Router from './router';
import {eventBus} from './eventBus';

import TasksPage from './pages/tasks/tasks';
import SettingsPage from './pages/settings/settings';
import ReportsPage from './pages/reports/reports';
import TimerPage from './pages/timer/timer';

class Application {
	constructor() {
        this.dataObject = {
            values: null,
            items: null,
            buttons: null,
            tasks: null,
            eventBus: eventBus,
        };

        this.tasks = new TasksPage(this.dataObject);     
        this.settings = new SettingsPage(this.dataObject);
        this.reports = new ReportsPage(this.dataObject);
        this.timer = new TimerPage(this.dataObject);

        this.router = new Router(this.dataObject);
        this.router.addRoute('', dataObject => eventBus.publish('StartPage', dataObject));
        this.router.addRoute('task-list', dataObject => eventBus.publish('StartPage', dataObject));
        this.router.addRoute('settings/pomodoros', dataObject => eventBus.publish('SettingsPage', dataObject));
        this.router.addRoute('reports/day/tasks', dataObject => eventBus.publish('DayTasks', dataObject));
        this.router.addRoute('reports/week/tasks', dataObject => eventBus.publish('WeekTasks', dataObject));
        this.router.addRoute('reports/month/tasks', dataObject => eventBus.publish('MonthTasks', dataObject));
        this.router.addRoute('timer', dataObject => eventBus.publish('TimerPage', dataObject));
    }
}

const app = new Application();
