require('./start.less');

import { renderButton } from '../../components/button/button';

export function renderStart(dataObject){
    let template = require('./start.hbs');
    let wrapper = document.querySelector('.wrapper');

    while(wrapper.firstChild){
        wrapper.removeChild(wrapper.firstChild);
    }

    wrapper.insertAdjacentHTML('beforeend', template());

    let footer = document.querySelector('.main').lastElementChild;
    for(let i=0; i< dataObject.buttons.length; i++){
        renderButton(footer, dataObject.buttons[i]);
    }

    document.querySelector('.head_middle').firstElementChild.onclick = event => {
        event.preventDefault();
        dataObject.eventBus.publish('AddDailyTaskClick', dataObject);
    }

    dataObject.buttons.forEach(button => {
        document.querySelector('.' + button.name).onclick = 
            event => dataObject.eventBus.publish(button.event, dataObject);
    });
}
