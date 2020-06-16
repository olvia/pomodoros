require('./header-nav-item.less'); 
// import {data} from './header-nav-item model';
require('./header-nav-item.hbs');


export function renderHeaderNavItem(area, data){
    let template = require('./header-nav-item.hbs');
   
   //   for (let value of data) {
   //      headerNavList.insertAdjacentHTML("beforeend", template(value));
   //   }
   area.insertAdjacentHTML("beforeend", template(data));
}
