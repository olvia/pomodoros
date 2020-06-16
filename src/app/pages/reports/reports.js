import Controller from './reports_controller';
import Model from './reports_model';
import View from './reports_view';

export default class ReportsPage {
   constructor(dataObject) {
      this.model = new Model();
      this.view = new View();
      this.controller = new Controller(this.model, this.view);
      this.dataObject = dataObject;
   }
}
