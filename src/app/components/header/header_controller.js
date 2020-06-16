import {eventBus} from '../../eventBus';

export default class Controller {
    constructor(model, view){
        this.model = model;
        this.view = view;

        eventBus.subscribe('StartPage', this.model.showDefaultHeader.bind(this.model));
        eventBus.subscribe('StartPage', this.view.showDefaultHeader.bind(this.view));

        eventBus.subscribe('SettingsPage', this.model.showDefaultHeader.bind(this.model));
        eventBus.subscribe('SettingsPage', this.view.showDefaultHeader.bind(this.view));

        eventBus.subscribe('TryAddTaskClick', this.model.showTaskListHeader.bind(this.model));
        eventBus.subscribe('TryAddTaskClick', this.view.showDefaultHeader.bind(this.view));
    }
}
