
import { renderButton } from '../../components/button/button';


export function renderTimer(dataObject){
    let template = require('./timer.hbs');
    let wrapper = document.querySelector(".wrapper");
    while(wrapper.firstChild){
        wrapper.removeChild(wrapper.firstChild);
    }
    wrapper.insertAdjacentHTML("beforeend", template(dataObject.values));

    //отрисовать помидорки

    let numberPomodoros = document.querySelector('.timer__pomodoros');
    while(numberPomodoros.firstChild){
        numberPomodoros.removeChild(numberPomodoros.firstChild);
    }
    let emptyTomato = '<img class="pomodoros__item" src="/images/empty-tomato.svg" alt="empty-tomato"></img>'
    let breakTomato = '<img class="pomodoros__item" src="/images/tomato-failed.svg" alt="empty-tomato"></img>'
    let fullTomato = '<img class="pomodoros__item" src="/images/fill tomato.svg" alt="empty-tomato"></img>'
    
    for (let i=0; i<dataObject.values.taskEstim; i++){
        numberPomodoros.insertAdjacentHTML("beforeend", emptyTomato);
    }
    //добавить плюсик в конце
    let plusButtonStr = '<a href="" class="timer__plus"><span class="icon-add"></span></a>'
    numberPomodoros.insertAdjacentHTML("beforeend", plusButtonStr);

    //coбытия кнопки плюсик
    let plusButton = document.querySelector('.timer__plus');
    plusButton.onclick = e =>{
        event.preventDefault();
        // console.log(numberPomodoros.children.length)
        if(numberPomodoros.children.length <= 10){
            numberPomodoros.insertAdjacentHTML("afterbegin", emptyTomato);
            dataObject.values.taskEstim=numberPomodoros.children.length-1;
            console.log(dataObject.values.taskEstim);
        }
        else{
            plusButton.disabled = 'true';
            plusButton.style.color='gray'
        }
       
        
    }

    //события кнопки start
    let start = document.querySelector('#start');
    start.onclick = e => {
        event.preventDefault();

        console.log("start");
        console.log(dataObject.values);


        dataObject.eventBus.publish('StartClick', dataObject);

        //поменять у таска значение на активный
        //начать обратный отсчет таймера
        //отобразить в кружочке, что таймер идет



        //вставить другие кнопочки
        let processButtons = document.querySelector('.timer__footer');
        while(processButtons.firstChild){
            processButtons.removeChild(processButtons.firstChild);
        }
    
        
        renderButton(processButtons, dataObject.buttons[0]);
        renderButton(processButtons, dataObject.buttons[1]);

        //убрать возможность добавлять помидорки

        numberPomodoros.removeChild(numberPomodoros.lastChild)

        //failed pomodora
        let failed = document.querySelector('#failed');
        failed.onclick = e =>{
            console.log("failed");
            //записать в датаобжект что помидорка фейлд и уменьшить количество выполненных помидорок
           
           
            //перечеркнуть на странице помидорку
            numberPomodoros.removeChild(numberPomodoros.firstChild);
            numberPomodoros.insertAdjacentHTML("afterbegin", breakTomato);


            //поменять кнопочки на start pomodora
            while(processButtons.firstChild){
                processButtons.removeChild(processButtons.firstChild);
            }
            renderButton(processButtons, dataObject.buttons[2]);


        }
        
        //finish pomodora
        let finish = document.querySelector('#finish');
        finish.onclick = e =>{
            console.log("finish");

   
            //засчитать помидорку выполненный, внести в датаобжект
            //закрасить помидорку, сделать её полной, а не пустой
            numberPomodoros.removeChild(numberPomodoros.firstChild);
            numberPomodoros.insertAdjacentHTML("afterbegin", fullTomato);

             //поменять кнопочки на start pomodora & finish task
             while(processButtons.firstChild){
                processButtons.removeChild(processButtons.firstChild);
            }
            renderButton(processButtons, dataObject.buttons[2]);
            renderButton(processButtons, dataObject.buttons[3]);


            let finishTask = document.querySelector('#finishTask');
                finish.onclick = e =>{
                    console.log("finish");
                }

        }
    
    };

   


}
