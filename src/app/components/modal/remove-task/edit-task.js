require('./edit-task.less');


export function renderEditTask(){
    let template = require('./edit-task.hbs');
    let wrapper = document.querySelector(".wrapper");
    while(wrapper.firstChild){
        wrapper.removeChild(wrapper.firstChild);
    }
    wrapper.insertAdjacentHTML("beforeend", template());
}
