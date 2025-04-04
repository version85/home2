"use strict";

let mainContent;
(function () {

    let html = document.querySelector('html');

    //RTL 
    if (!localStorage.getItem("hostgridrtl")) {
        // html.setAttribute("dir" , "rtl") // for rtl version 
    }


    /*RTL Start*/
    if (html.getAttribute('dir') === "rtl") {
        rtlFn();
    }
    /*RTL End*/

    if (document.querySelector("#switcher-canvas")) {
        localStorageBackup();
    }

    switcherClick();
    checkOptions();

})();

function switcherClick() {
    let ltrBtn, rtlBtn, resetBtn, ResetAll;
    let html = document.querySelector('html');
    
    ltrBtn = document.querySelector('#switcher-ltr');
    rtlBtn = document.querySelector('#switcher-rtl');
  
    resetBtn = document.querySelector('#resetbtn');
    
    ResetAll = document.querySelector('#reset-all');


    
   
    

    
    
    
    
    


    /* rtl start */
    if(rtlBtn){
        rtlBtn.addEventListener('click', () => {
            localStorage.setItem("hostgridrtl", true);
            localStorage.removeItem("hostgridltr");
            rtlFn();
        });
        /* rtl end */
    }

    /* ltr start */
    if(ltrBtn){
        ltrBtn.addEventListener('click', () => {
            //    local storage 
            localStorage.setItem("hostgridltr", true);
            localStorage.removeItem("hostgridrtl");
            ltrFn();
        });
    };
    

    // reset all start
    if(ResetAll){
        ResetAll.addEventListener('click', () => {
            ResetAllFn();
        })
    }
    // reset all start
}

function ltrFn() {
    let html = document.querySelector('html')
    document.querySelector("#style")?.setAttribute("href", "../hostgrid/css/style.css");
    html.setAttribute("dir", "ltr");
    document.querySelector('#switcher-ltr').checked = true;
    checkOptions();
}

function rtlFn() {
    let html = document.querySelector('html');
    html.setAttribute("dir", "rtl");
    document.querySelector("#style")?.setAttribute("href", "../hostgrid/css/style.css");
    checkOptions();
}


function ResetAllFn() {
    let html = document.querySelector('html');
    checkOptions();
    // clearing localstorage
    localStorage.clear();
    // reseting to ltr
    ltrFn();
}

function checkOptions() {

    

    //RTL 
    if (localStorage.getItem('hostgridrtl')) {
        if(document.querySelector('#switcher-rtl')){
            document.querySelector('#switcher-rtl').checked = true;
        }
    }

    
}
	



function localStorageBackup() {
    // if there is a value stored, update color picker and background color
    // Used to retrive the data from local storage
   
    if (localStorage.hostgridrtl) {
        let html = document.querySelector('html');
        html.setAttribute('dir', 'rtl');
        rtlFn();
    }
    
    if(localStorage.hostgridltr){
        ltrFn()
    }
}