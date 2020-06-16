export default class DataService{
    constructor(){
        let config = {
            apiKey: "AIzaSyCcJXBb_lL4DboQeq9-oP6l-ju1yc-K2p0",
            authDomain: "productivity-app-a4fde.firebaseapp.com",
            databaseURL: "https://productivity-app-a4fde.firebaseio.com",
            projectId: "productivity-app-a4fde",
            storageBucket: "productivity-app-a4fde.appspot.com",
            messagingSenderId: "382485553078",
            appId: "1:382485553078:web:912e0f84751fabf2b32b17",
            measurementId: "G-KXTBE0NLSY"
        };

        firebase.initializeApp(config);
        firebase.analytics();

        this.base = firebase.database();
        //this.initSettings(15, 2, 3, 15);
    }

    initSettings(workTime, workIteration, shortBreak, longBreak) {
        this.base.ref('settings/').set({
            workTime: workTime,
            workIteration: workIteration,
            shortBreak: shortBreak,
            longBreak: longBreak
        });
    }

    updateSettings(dataObject) {
        let settings = dataObject.values; 
        this.base.ref('settings/').set({
            workTime: settings.workTime, 
            workIteration: settings.workIteration, 
            shortBreak: settings.shortBreak, 
            longBreak: settings.longBreak
        });
    }

    readSettings(dataObject) {
        this.base.ref('settings/').on('value', data => dataObject.values = data.val());
        if(dataObject.values == null){
            setTimeout(() => {console.log(dataObject.values);}, 500);
        }
    }

    saveTask(dataObject){
        this.base.ref('tasks/' + dataObject.values.id + '/').set(dataObject.values);
        console.log("Your data was succcessfully saved");
    }

    readAllTasks(dataObject){
        let res = this.base.ref('tasks/').once('value').then((data) => {
            if (data.val() !== null){
                dataObject.values = data.val();
                return dataObject.values;
            }
            return null;
        });
        return Promise.resolve(res);
    }
}

export const dataService = new DataService();


/*
export function DataService() {

    var firebaseConfig = {
        apiKey: "AIzaSyCcJXBb_lL4DboQeq9-oP6l-ju1yc-K2p0",
        authDomain: "productivity-app-a4fde.firebaseapp.com",
        databaseURL: "https://productivity-app-a4fde.firebaseio.com",
        projectId: "productivity-app-a4fde",
        storageBucket: "productivity-app-a4fde.appspot.com",
        messagingSenderId: "382485553078",
        appId: "1:382485553078:web:912e0f84751fabf2b32b17",
        measurementId: "G-KXTBE0NLSY"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    const database = firebase.database();

    function writeSettingsData(workTime, worIteration, shortBreak, longBreak) {
        database.ref('settings/').set({workTime: workTime, worIteration: worIteration, shortBreak: shortBreak, longBreak: longBreak});
    }
    writeSettingsData(25, 2, 3, 15);

    function readSettingsData() {
        var base = database.ref("settings");
        base.on("value", function (data) {
            var settings = data.val();
            console.log(settings.longBreak)
            return settings;
        });
    }
    readSettingsData();
}
*/