export default class Model {
    constructor(dataObject){

       
    
    }

    dataTimerPage(dataObject){
        console.log(dataObject);
        let taskName = dataObject.tasks[1].title;
        let taskDesc = dataObject.tasks[1].description;
        let taskEstim = dataObject.tasks[1].estimation;

        dataObject.values = {
            taskName:taskName,
            taskDesc:taskDesc,
            taskEstim:taskEstim
            //количество помидорок вывести еще
          };  

    }
}
