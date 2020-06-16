import {eventBus} from '../../eventBus';

export default class Controller{
    constructor(model, view){
        this.model = model;
        this.view = view;

        eventBus.subscribe('SettingsPage', this.model.readFromDb.bind(this));
        eventBus.subscribe('SettingsPage', this.view.showSettingsPage.bind(this));
        
        eventBus.subscribe('SaveClick', this.view.getSettingsToDb.bind(this));
        eventBus.subscribe('SaveClick', this.model.saveToDb.bind(this));
        eventBus.subscribe('SaveClick', () => window.location.replace("#/task-list"));

        eventBus.subscribe('CategoriesClick', this.model.getCategories.bind(this));
        eventBus.subscribe('CategoriesClick', this.view.showCategoriesPage.bind(this));
    }
}