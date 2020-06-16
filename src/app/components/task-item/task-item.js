require('./task-item.less'); 

export function renderTaskItem(area, task){
    let template = require('./task-item.hbs');
    let date = new Date(task.deadlineDate);
    let dateParts = date.toString().split(' ', 3);

    let distanceInDays = (date - Date.now()) / 1000 / 3600 / 24;
    console.log(distanceInDays);

    if(distanceInDays < 0){
        task.stringDeadlineDate = dateParts[1] + ' ' + dateParts[2];
    }
    
    area.insertAdjacentHTML("beforeend", template(task));
    // addin icon - move to daily task list for tasks from global task lisk
    if(task.status === 'GLOBAL_LIST'){
        let taskLink = document.getElementById('task' + task.id).querySelector('.task-list__links');
        let moveToDailyTemplate = '<a id="task' + task.id + 
            '-move" class="task-list__link" data-title="Move task" href=""><span class="icon-arrows-up"></span></a>';    
        taskLink.insertAdjacentHTML("afterbegin", moveToDailyTemplate);
    }
}
