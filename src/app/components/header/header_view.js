import {renderHeaderNavItem} from '../header-nav-item/header-nav-item';

export default class View {

    constructor(){
        let template = require('./header.hbs');
        root.insertAdjacentHTML("afterbegin", template());
    }

    showDefaultHeader(dataObject){
        let navList = document.querySelector(".header-nav__list");

        while(navList.firstChild){
            navList.removeChild(navList.firstChild);
        }
        dataObject.items.forEach(item => renderHeaderNavItem(navList, item));
    }
}
