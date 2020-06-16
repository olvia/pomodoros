require('./task-item-remove.less'); 

export function renderTaskItemRemove(area,data){
    let template = require('./task-item-remove.hbs');
    area.insertAdjacentHTML("beforeend", template(data));
}