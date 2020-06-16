
require('./categories-item.less');

export function renderCategoriesItem(area,data){
    let template = require('./categories-item.hbs');
    area.insertAdjacentHTML("beforeend", template(data));
}