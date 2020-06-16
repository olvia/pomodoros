import { dataService } from '../../services/data-service';

export default class Model {
    constructor(dataObject){
    }

    createDailyReport(dataObject){
        let urgentTasks = dataObject.tasks.filter(task => task.priority == "urgent");
        let highTasks = dataObject.tasks.filter(task => task.priority == "high");
        let mediumTasks = dataObject.tasks.filter(task => task.priority == "medium");
        let lowTasks = dataObject.tasks.filter(task => task.priority == "low");
        // let failesTasks = dataObject.tasks.filter(task => task.failed =="true");

        //get today date
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let day = now.getDate();

        if (month <= 9){
            month = "0" + month
        }

        let curDay = `${day} - ${month} - ${year}`;

        dataObject.values = {
            urgent: urgentTasks.length,
            high: highTasks.length,
            medium: mediumTasks.length,
            low: lowTasks.length,
            failed: 1,//fake data
            date: curDay
        };       
    }
    
    createWeeklyReport(dataObject){
        let urgentTasks = dataObject.tasks.filter(task => task.priority == "urgent");
        let highTasks = dataObject.tasks.filter(task => task.priority == "high");
        let mediumTasks = dataObject.tasks.filter(task => task.priority == "medium");
        let lowTasks = dataObject.tasks.filter(task => task.priority == "low");
        // let failesTasks = dataObject.tasks.filter(task => task.failed =="true");

        //get today date
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let day = now.getDate();

        if (month <= 9){
            month = "0" + month
        }

        let curDay = `${day} - ${month} - ${year}`;
        dataObject.values = {
            urgent: urgentTasks.length,
            high: highTasks.length,
            medium: mediumTasks.length,
            low: lowTasks.length,
            failed: 1,//fake data
            date: curDay
        };       
    }
}
