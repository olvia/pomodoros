import { dataService } from '../../services/data-service';

export default class Model {
    readFromDb(dataObject){
		dataService.readSettings(dataObject);
		if(dataObject.values == null){
			dataObject.values = {
				workTime: 15,
				workIteration: 2,
				shortBreak: 3,
				longBreak: 15,	
			};
		}
	}

	saveToDb(dataObject){
		dataService.updateSettings(dataObject);
		console.log('Your data was successfully saved!');
	}

	getCategories(dataObject)
	{
		dataObject.values = [
            { category:'work', text:'Work'},
            { category:'education', text:'Education'},
            { category:'hobby', text:'Hobby'},
            { category:'sport', text:'Sport'},
            { category:'other', text:'Other'},
        ];
	}
}
