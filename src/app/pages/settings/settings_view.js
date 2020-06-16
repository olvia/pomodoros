import {renderSettings} from '../../components/settings/settings';
import {renderCategories} from '../../components/categories/categories';

export default class View{

    showSettingsPage(dataObject){ 
        dataObject.buttons = [
            { href:'task-list', text:'Go to tasks', name:'button_ok' },
            { href:'task-list', text:'Save', name:'button_save' }
        ]

        if(dataObject.values == null){                             
            setTimeout(() => renderSettings(dataObject), 250); 
        } else{                                                
            renderSettings(dataObject);
        }
    }

    showCategoriesPage(dataObject){
        dataObject.buttons = [
            { href:'task-list', text:'Go to tasks', name:'button_ok' },
        ];                                           
        
        renderCategories(dataObject);
    }
    
    getSettingsToDb(dataObject){
        dataObject.values = {
            workTime: document.getElementById('voter__vote_work-time').innerText,
            workIteration: document.getElementById('voter__vote_work-iteration').innerText,
            shortBreak: document.getElementById('voter__vote_short-break').innerText,
            longBreak: document.getElementById('voter__vote_long-break').innerText,
        };
    }
}