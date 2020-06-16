import { dataService } from '../../services/data-service';
import { data } from '../../components/header-nav-item/header-nav-item_model';

export default class Model {
    constructor(){
        this.tasks = [];
        this.taskCounter = 0;
    }

    loadTasksFromDb(dataObject){
        dataService.readAllTasks(dataObject).then(result => {
            this.tasks = result;
            dataObject.tasks = this.tasks;
        });
    }

    tryAddTask(dataObject){
        const newTask = dataObject.values;
        let isNewTaskExisting = false;

        this.tasks.forEach(task => {
            if(task.id === newTask.id ||
               task.title === newTask.title){
                isNewTaskExisting = true;
            }
        });

        if(!isNewTaskExisting){
            newTask.id = ++this.taskCounter;
            this.tasks.push(newTask);
            dataObject.tasks = this.tasks;
            dataService.saveTask(dataObject);
        }
    }

    applyEditTask(dataObject){
        dataService.saveTask(dataObject);
    }

    moveToDailyTasks(dataObject){
        dataObject.tasks.forEach(task => {
            if(task.id === dataObject.values.id){
                task.status = 'DAILY_LIST';
                dataObject.values = task;
                dataService.saveTask(dataObject);
                return;
            }
        });
    }
}
