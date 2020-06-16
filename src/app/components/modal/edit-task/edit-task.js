require('./edit-task.less');

export function renderEditTask(dataObject){
    let template = require('./edit-task.hbs');
    let wrapper = document.querySelector(".wrapper");
    wrapper.insertAdjacentHTML("beforeend", template());

    // setting data from editing task to html-elements
    document.querySelector('.edit-task__title-desc').value = dataObject.values.title;
    document.querySelector('.edit-task__description-desc').value = dataObject.values.description;
    document.querySelector('.edit-task__deadline-desc').value = dataObject.values.deadlineDate;
    document.querySelector('input[value='+ dataObject.values.categoryId +']').setAttribute('checked', 'checked');
    document.querySelector('input[id="'+ dataObject.values.estimation +' pomodoros"]').setAttribute('checked', 'checked');
    document.querySelector('input[value='+ dataObject.values.priority +']').setAttribute('checked', 'checked');

    // cancelation button click
    document.querySelector('.icon-close').onclick = event => {
        event.preventDefault();
        dataObject.eventBus.publish('SkipClick', dataObject);
    };

    // apply edit task buttin click
    document.querySelector('.icon-check').onclick = event => {
        event.preventDefault();

        dataObject.values.title = document.querySelector('.edit-task__title-desc').value;
        dataObject.values.description = document.querySelector('.edit-task__description-desc').value;
        dataObject.values.categoryId = document.querySelector('input[name="category"]:checked').value;
        dataObject.values.deadlineDate = document.querySelector('.edit-task__deadline-desc').value;
        dataObject.values.priority = document.querySelector('input[name="priority"]:checked').value;

        dataObject.eventBus.publish('ApplyEditTaskClick', dataObject);
    }
}
