import Controller from './timer_controller';
import Model from './timer_model';
import View from './timer_view';

export default class TimerPage {
   constructor(dataObject) {
      this.model = new Model();
      this.view = new View();
      this.controller = new Controller(this.model, this.view);
      this.dataObject = dataObject;
   }
}
