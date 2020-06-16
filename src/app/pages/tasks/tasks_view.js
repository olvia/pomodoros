import { renderStart } from '../../components/start/start';
import { renderAddFirstTask } from '../../components/task-list-first-entrance/task-list-first-entrance';
import { renderAddTask } from '../../components/modal/add-task/add-task';
import { renderTaskList } from '../../components/task-list/task-list';
import { renderEditTask } from '../../components/modal/edit-task/edit-task';

export default class View{
    constructor(){
        this.isFirstTimeLoading = true;
        this.isAddFirstTaskClicked = false;
    }

    showStartPage(dataObject){
        if(this.isFirstTimeLoading){
            this.isFirstTimeLoading = false;
            dataObject.buttons = [
                { event:'SkipClick', text:'Skip', name:'button_ok' },
                { event:'SettingsClick', text:'Go to settings', name:'button_save' }
            ];
            renderStart(dataObject);
        }
        else if (dataObject.tasks != null && dataObject.tasks.length > 0){
            renderTaskList(dataObject);
        }
        else{
            renderAddFirstTask(dataObject);
        }
    }

    showAddFirstTaskPage(dataObject){
        renderAddFirstTask(dataObject);
        renderAddTask(dataObject);
    }

    hideAddFirstTaskWindow(dataObject){
        renderAddFirstTask(dataObject);
    }

    showAddTaskResult(dataObject){
        renderTaskList(dataObject);
    }

    showAddTaskPage(dataObject){
        renderTaskList(dataObject);
        renderAddTask(dataObject);
    }

    showEditTaskPage(dataObject){
        renderTaskList(dataObject);
        renderEditTask(dataObject);
    }

    showInDailyTasksPage(dataObject){
        renderTaskList(dataObject);
    }
}
