require('./task-list-remove-mode.less'); 


import { data } from '../../components/task-item/task-item_model.js';
import { renderTaskItemRemove } from '../../components/task-item-remove/task-item-remove';

export function renderRemoveMode(){
    let template = require('./task-list-remove-mode.hbs');
    let wrapper = document.querySelector(".wrapper");
    while(wrapper.firstChild){
        wrapper.removeChild(wrapper.firstChild);
    }
    wrapper.insertAdjacentHTML("beforeend", template()); 
    
    let taskList = document.querySelector(".remove-mode"); 
    for (let i=0; i <5; i++){
        renderTaskItemRemove(taskList, data);
    }
    
}
