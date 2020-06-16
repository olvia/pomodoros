import {eventBus} from '../../eventBus';

export default class Controller{
    constructor(model, view){
        this.model = model;
        this.view = view;

        eventBus.subscribe('StartPage', this.model.loadTasksFromDb.bind(this.model));
        eventBus.subscribe('StartPage', this.view.showStartPage.bind(this.view));

        eventBus.subscribe('SkipClick', this.view.showStartPage.bind(this.view));
        eventBus.subscribe('SettingsClick', () => window.location.replace("#/settings/pomodoros"));
        eventBus.subscribe('AddDailyTaskClick', this.view.showAddFirstTaskPage.bind(this.view));

        eventBus.subscribe('TryAddTaskClick', this.model.tryAddTask.bind(this.model));
        eventBus.subscribe('TryAddTaskClick', this.view.showAddTaskResult.bind(this.view));

        eventBus.subscribe('AddTaskClick', this.view.showAddTaskPage.bind(this.view));

        eventBus.subscribe('EditTaskClick', this.view.showEditTaskPage.bind(this.view));

        eventBus.subscribe('ApplyEditTaskClick', this.model.applyEditTask.bind(this.model));
        eventBus.subscribe('ApplyEditTaskClick', this.view.showAddTaskResult.bind(this.view));

        eventBus.subscribe('MoveToDailyTasksClick', this.model.moveToDailyTasks.bind(this.model));
        eventBus.subscribe('MoveToDailyTasksClick', this.view.showInDailyTasksPage.bind(this.view));
    }
}
