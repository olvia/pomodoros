import Controller from './tasks_controller';
import Model from './tasks_model';
import View from './tasks_view';

export default class TasksPage {
   constructor(dataObject) {
      this.model = new Model();
      this.view = new View();
      this.controller = new Controller(this.model, this.view);
      this.dataObject = dataObject;

      this.model.loadTasksFromDb(this.dataObject);
   }
}
