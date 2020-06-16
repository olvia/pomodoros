require('./task-list-done.less'); 
import { data } from '../../components/task-item/task-item_model.js';
import { renderTaskItem } from '../../components/task-item/task-item';


export function renderTaskListDone(){
    let template = require('./task-list-done.hbs');
    let wrapper = document.querySelector(".wrapper");
    while(wrapper.firstChild){
        wrapper.removeChild(wrapper.firstChild);
    }
    wrapper.insertAdjacentHTML("beforeend", template());
    let taskList = document.querySelector(".task-list__list"); 
    for (let i=0; i <5; i++){
        renderTaskItem(taskList, data);
    }
}
