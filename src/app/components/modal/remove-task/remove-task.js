require('./remove-task.less');


export function renderRemoveTask(){
    let template = require('./remove-task.hbs');
    let wrapper = document.querySelector(".wrapper");
    while(wrapper.firstChild){
        wrapper.removeChild(wrapper.firstChild);
    }
    wrapper.insertAdjacentHTML("beforeend", template());
}
