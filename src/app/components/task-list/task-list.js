require('./task-list.less'); 

import {renderTaskItem} from '../task-item/task-item';

const categories = ['work', 'education', 'hobby', 'sport', 'other'].reverse();

export function renderTaskList(dataObject){
    let template = require('./task-list.hbs');
    let wrapper = document.querySelector('.wrapper');
    
    while(wrapper.firstChild){
        wrapper.removeChild(wrapper.firstChild);
    }
    wrapper.insertAdjacentHTML("beforeend", template());

    // show daily tasks list
    let dailyTasksElement = document.querySelector('#todo');
    const dailyTasks = dataObject.tasks.filter(task => task.status === 'DAILY_LIST');
    if(dailyTasks.length < 1){
        let firstMessage = "<br><br><br><p class='head_middle'>Task added, drag it to the top 5 in daily task list</p><br><br><br>";
        dailyTasksElement.insertAdjacentHTML('beforeend', firstMessage);
    }
    else{
        dailyTasks.forEach(task => {
            renderTaskItem(dailyTasksElement, task);

            // addind click method for editing tasks
            document.getElementById('task' + task.id + '-edit')
            .addEventListener('click', event => {
                event.preventDefault();
                dataObject.values = task;
                dataObject.eventBus.publish('EditTaskClick', dataObject);
            });
        });
    }

    // show global tasks list group by categories
    resetCategories(dataObject, dataObject.tasks, 'allPriorities');

    // adding clicker for add new task command
    document.querySelector('.head_middle').firstElementChild.onclick = event => {
        event.preventDefault();
        dataObject.eventBus.publish('AddTaskClick', dataObject);
    }

    // adding click methods to filters
    let priorities = document.querySelector('.tab_priority').children;
    for(let i=0; i<priorities.length; i++){
        priorities[i].addEventListener('click', event => {
            let taskTypes = event.target.innerText.toLowerCase();

            let tasksToShow = taskTypes !== 'all' ?
                dataObject.tasks.filter(task => task.priority.includes(taskTypes)) :
                dataObject.tasks;

            resetCategories(dataObject, tasksToShow, event.target.id);
        });
    }
}

// method for grouping tasks by categories and adding categories into current page content
function resetCategories(dataObject, tasks, filterId){
    document.querySelectorAll('.task-list-categories').forEach(x => x.parentNode.removeChild(x));
    
    let items = document.querySelector('.tab_priority').children;
    for(let i=0; i<items.length; i++){
        items[i].className = items[i].id ===  filterId ? 'tab__item white' : 'tab__item';
    }

    // working with every category
    const taskListTabs = document.querySelector('.task-list__tabs');
    categories.forEach(category => {
        let specialTasks = tasks.filter(task => task.categoryId === category && task.status === 'GLOBAL_LIST');
        if(specialTasks.length > 0){
            let work = "<div class='task-list-categories task-list-categories_" + category + "'><div class='task-list-categories__item'><div class='task-list-categories__circle'></div>" + category + "</div><ul class='task-list__list task-list__list_todo' id='" + category + "Tasks'></ul>";
            taskListTabs.insertAdjacentHTML("afterend", work);
    
            let list = document.querySelector('#' + category + 'Tasks');
            specialTasks.forEach(task => {
                renderTaskItem(list, task);

                // add clicker for edit task list operation
                document.getElementById('task' + task.id + '-edit')
                .addEventListener('click', event => {
                    event.preventDefault();
                    dataObject.values = task;
                    dataObject.eventBus.publish('EditTaskClick', dataObject);
                });

                // add clicker for move to daily task list operation
                let taskItem = document.getElementById('task' + task.id + '-move');
                taskItem.addEventListener('click', event => {
                    event.preventDefault();
                    dataObject.values = task;
                    dataObject.eventBus.publish('MoveToDailyTasksClick', dataObject);
                });
            });
        }
    });
}
