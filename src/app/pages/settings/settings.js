import Controller from './settings_controller';
import Model from './settings_model';
import View from './settings_view';

export default class SettingsPage {
   constructor(dataObject) {
        this.model = new Model();
        this.view = new View();
        this.controller = new Controller(this.model, this.view);
        this.dataObject = dataObject;

        this.model.readFromDb(this.dataObject);
   }
}
