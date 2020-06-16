
require('./button.less');

export function renderButton(area, data){
    let template = require('./button.hbs');
    area.insertAdjacentHTML("beforeend", template(data));
}





// createComponent(template, info, adjacentTo) {
//     let component = template(info);
//     let parentElement = document.querySelector(`.${adjacentTo}`);
//     parentElement.insertAdjacentHTML("beforeend", component);
// }