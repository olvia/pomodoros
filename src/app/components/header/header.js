require('./header.less');

import Model from './header_model';
import View from './header_view';
import Controller from './header_controller';

class Header{
    constructor(){
        this.model = new Model();
        this.view = new View();
        this.controller = new Controller(this.model, this.view);
    }  
}

export const header = new Header();

function stickyHeader() {
    let header = document.querySelector(".header");
    let logo = document.querySelector(".logo");
    let iconAdd = document.querySelector("#icon-add");

    let debounce_timer;
    window.onscroll = function(){
        if(debounce_timer) {
            window.clearTimeout(debounce_timer);
        }
    
        debounce_timer = window.setTimeout(function() {
            if (pageYOffset > 1) {
                header.classList.add("header_sticky");
            
                logo.style.visibility = "visible";
                // iconAdd.style.visibility = "visible";
            } else {
                header.classList.remove("header_sticky");
                logo.style.visibility = "hidden";
                // iconAdd.style.visibility = "hidden";
            }
        }, 100);
    };
}

stickyHeader();
