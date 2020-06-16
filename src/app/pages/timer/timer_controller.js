import {eventBus} from '../../eventBus';

export default class Controller {
    constructor(model, view){
        this.model = model;
        this.view = view;


        eventBus.subscribe('TimerPage', this.model.dataTimerPage.bind(this.view));
        eventBus.subscribe('TimerPage', this.view.showTimerPage.bind(this.view));        
    }
}
