export default class Model {

    showDefaultHeader(dataObject){
            dataObject.items = [
                { href:'#/task-list', dataTitle:'Go to tasks', iconName:'icon-list' },
                { href:'#/reports/day/tasks', dataTitle:'Go to reports', iconName:'icon-statistics' },
                { href:'#/settings/pomodoros', dataTitle:'Go to settings', iconName:'icon-settings'}
             ];     
    }

    showTaskListHeader(dataObject){
        if(dataObject.tasks == null || dataObject.tasks.length < 1){
            this.showDefaultHeader(dataObject);     
        }
        else {
            dataObject.items = [
                { href:'#/task-list-delete', dataTitle:'Delete tasks', iconName:'icon-trash'},
                { href:'#/task-list', dataTitle:'Go to tasks', iconName:'icon-list' },
                { href:'#/reports/day/tasks', dataTitle:'Go to reports', iconName:'icon-statistics' },
                { href:'#/settings/pomodoros', dataTitle:'Go to settings', iconName:'icon-settings'}            
            ];
        }
    }
}
