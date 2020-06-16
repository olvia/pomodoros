require('./categories.less');
import { renderButton } from '../../components/button/button';
import {renderCategoriesItem} from '../../components/categories-item/categories-item';


export function renderCategories(dataObject){ 
        let template = require('./categories.hbs');
        let wrapper = document.querySelector(".wrapper");

        while(wrapper.firstChild){
            wrapper.removeChild(wrapper.firstChild);
        }
        wrapper.insertAdjacentHTML("beforeend", template());
    
        let categories = document.querySelector(".categories__list");
        dataObject.values.forEach(item => renderCategoriesItem(categories, item));
    
        let categoriesButtons = document.querySelector(".categories__buttons");
        renderButton(categoriesButtons, dataObject.buttons[0]);  
        document.querySelector('.' + dataObject.buttons[0].name).onclick = e => window.location.replace("#/task-list");

        let pomodorosBtn = document.querySelector('.categories__tab').firstElementChild;
        let categoriesBtn = document.querySelector('.categories__tab').lastElementChild;

        pomodorosBtn.onclick = event => {
            event.preventDefault();
            dataObject.eventBus.publish('SettingsPage', dataObject);
        };

        categoriesBtn.onclick = event => {
            event.preventDefault();
            dataObject.eventBus.publish('CategoriesClick', dataObject);
        };
}