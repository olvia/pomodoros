require('./task-list-first-entrance.less'); 

export function renderAddFirstTask(dataObject){
    let template = require('./task-list-first-entrance.hbs');
    let wrapper = document.querySelector(".wrapper");

    while(wrapper.firstChild){
        wrapper.removeChild(wrapper.firstChild);
    }

    wrapper.insertAdjacentHTML('beforeend', template());

    document.querySelector('.head_middle').firstElementChild.onclick = event => {
        event.preventDefault();
        dataObject.eventBus.publish('AddDailyTaskClick', dataObject); 
    };

    document.querySelector('.first-message').firstElementChild.onclick = event => {
        event.preventDefault();
        dataObject.eventBus.publish('AddDailyTaskClick', dataObject); 
    };
}
