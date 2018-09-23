// Global Variables
var app
// Functions
$( document ).ready(function() {
    // TODO: When the document is loaded and ready for manipulation.
    vue();
    typed();
});

function vue(){
    // This function runs all of the Vue code.
    app = new Vue({
        el : "#app",
        data : {
            message : "Hello Vue",
        }
    });
}

function typed(){
    // This function inits the typed js effects
    var typed = new Typed('#typed1', {
        stringsElement: '#typed-strings',
        smartBackspace: true,
        loop: true,
        typeSpeed: 25,
        backSpeed : 25
    });
}

