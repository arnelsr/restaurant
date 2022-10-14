//import everything
//load initial page
//load initial window
//event listener delegation

//import
import './style.css';

import initialLoad from './initialLoad';
import createWelcome from './createWelcome';
import createMenu from './createMenu';
import createContact from './createContact';

//main program
//initial load module
initialLoad();
createWelcome();

//main logic, event delegation
document.addEventListener('click',function(e){
    switch (e.target.id) {
        case 'home':
            //create welcome
            createWelcome();
            break;
        case 'menu':
            //create menu
            createMenu();
            break;
        case 'contact':
            //create contact
            createContact();
            break;
    }
    
});
