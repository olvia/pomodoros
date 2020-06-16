export default class Router {
    constructor(dataObject){
       this.routes = [];
       this.dataObject = dataObject;

       window.addEventListener('load', this.navigate.bind(this));
       window.addEventListener('hashchange', this.navigate.bind(this));
//     window.addEventListener('beforeunload', this.route.bind(this));   
    }
   
    addRoute(type, callback) {
        const route = this.findRoute(type);

        if (!route) {
            this.routes.push({ type: type, callback: callback});
        }
    }
   
    findRoute(type) {
        return this.routes.find(x => x.type === type);
    }    

    navigate(event) {
        event.preventDefault();
        let location = document.location.hash;
    
        if(event.type == 'load'){
            if(sessionStorage.getItem('oldUser') === null){ // is new user
                sessionStorage.setItem('oldUser', 'true');
                location = '';
            }
            else{ // is old user
                location ='#/settings/pomodoros';
                document.location.hash = location;
            }
        }

        let page = '';
        let path = location.split('/');
        for(let i=1; i<path.length; i++){
            page += path[i] + (i < path.length-1 ? '/' : '');
        }

        const route = this.findRoute(page);

        if (route) {
            route.callback(this.dataObject);
        }
    } 
}
