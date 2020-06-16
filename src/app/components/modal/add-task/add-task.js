require('./add-task.less');

export function renderAddTask(dataObject){
    let template = require('./add-task.hbs');
    let wrapper = document.querySelector(".wrapper");
    wrapper.insertAdjacentHTML("beforeend", template());

    // Close button click
    document.querySelector('.icon-close').onclick = event => {
        event.preventDefault();
        dataObject.eventBus.publish('SkipClick', dataObject);
    };

    // Check button click
    document.querySelector('.icon-check').onclick = event => {
        event.preventDefault();
 
        dataObject.values = {
            id: undefined,
            title: document.querySelector('.add-task__title-desc').value,
            description: document.querySelector('.add-task__description-desc').value,
            categoryId: document.querySelector('input[name="category"]:checked').value,
            priority: document.querySelector('input[name="priority"]:checked').value,
            estimation:  document.querySelector('input[name="pomodoros"]:checked').value,     
            deadlineDate: document.querySelector('.add-task__deadline-desc').value,
            status: 'GLOBAL_LIST', // GLOBAL_LIST, DAILY_LIST, ACTIVE, COMPLETED
            createDate: new Date(),
            completedCount: 0,
            failedPomodoros: [],
            completeDate: null,      
        };

        dataObject.eventBus.publish('TryAddTaskClick', dataObject);
    };
}

// id:string; - ok
// title:string; - ok
// decription:string; - ok
// categoryId:string; - ok
// priority:number; - ok
// estimation:number; - ok
// deadlineDate:Date; - ok
// status:taskStatus; - GLOBAL_LIST, DAILY_LIST, ACTIVE, COMPLETED
// createDate:Date; - ok
// completedCount:number; - ok
// failedPomodoros:number[]; - ok
// completeDate:Date; - ok
