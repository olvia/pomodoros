require('./settings.less'); 

import { renderTimeline } from '../../components/timeline/timeline';
import { renderButton } from '../../components/button/button';

export function renderSettings(dataObject){ 
    let template = require('./settings.hbs');
    let wrapper = document.querySelector('.wrapper');    

    while(wrapper.firstChild){
        wrapper.removeChild(wrapper.firstChild);
    }
    wrapper.insertAdjacentHTML('beforeend', template(dataObject.values)); 

    renderTimeline();

    let cycleButtons = document.querySelector('.cycle__buttons');
    dataObject.buttons.forEach(button => renderButton(cycleButtons, button));

    // add event listeners to buttons ans links
    let goToTasks = document.querySelector('.cycle__buttons').firstElementChild;
    goToTasks.onclick = e => window.location.replace("#/task-list");

    let save = document.querySelector('.cycle__buttons').lastElementChild;
    save.onclick = e => {
        event.preventDefault();
        dataObject.eventBus.publish('SaveClick', dataObject);
    };

    let pomodoros = document.querySelector('.settings__tab').firstElementChild;
    pomodoros.onclick = event => {
        event.preventDefault();
        dataObject.eventBus.publish('SettingsPage', dataObject);
    };

    let categories = document.querySelector('.settings__tab').lastElementChild;
    categories.onclick = event => {
        event.preventDefault();
        dataObject.eventBus.publish('CategoriesClick', dataObject);
    };
} 
