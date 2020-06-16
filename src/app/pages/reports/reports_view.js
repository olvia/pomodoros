import {renderReportsDayTasks} from '../../components/reports/reports';
import {renderReportsWeekTasks} from '../../components/reports/reports';
import {renderReportsMonthTasks} from '../../components/reports/reports';


export default class View {

    showReportsDayTasksPage(dataObject){
        renderReportsDayTasks(dataObject);

        console.log(dataObject.values);
    }

    showWeekTasksPage(dataObject){
        renderReportsWeekTasks(dataObject);
        console.log(dataObject.values);
    }

    showMonthTasksPage(dataObject){
        renderReportsMonthTasks(dataObject);
    }

    showDayPomodorosPage(dataObject){
        renderReportsDayTasks(dataObject);
    }

    showWeekPomodorosPage(dataObject){
        renderReportsDayTasks(dataObject);
    }
    showMonthPomodorosPage(dataObject){
        renderReportsDayTasks(dataObject);
    }
}
