import {renderTimer} from '../../components/timer/timer';

export default class View {

    showTimerPage(dataObject){
        dataObject.buttons = [
            { href:'timer', text:'Fail Pomodora', name:'button_cancel', id:'failed' },
            { href:'timer', text:'Finish Pomodora', name:'button_ok', id:'finish' },
            { href:'timer', text:'Start Pomodora', name:'button_save', id:'start' },
            { href:'timer', text:'Finish Task', name:'button_ok', id:'finishTask' }
        ]
        renderTimer(dataObject);
    }
}