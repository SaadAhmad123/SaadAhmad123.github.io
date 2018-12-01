window.onload = function(){
    vue();
    materialize();
}


function vue(){
    Vue.component("navbar-menu", {
        template : `<ul class='navbar-menu-ul'> <li v-for='link in links'> <a :href='link.ref' class='hvr-underline-from-left-black'>{{link.name}}</a> </li> </ul>`,
        data : function(){
            return {
                links : [
                    {
                        name : "Home",
                        ref : "index.html"
                    },{
                        name : "About Me",
                        ref : "aboutme.html"
                    },{
                        name : "My Work",
                        ref : "#2"
                    },{
                        name : "Tutorials",
                        ref : "#3"
                    }
                ]
            };
        }
    })

    var app = new Vue({
        el:"#app",
        data : {}
    })
}

function materialize(){
    $(document).ready(function(){
        $('.sidenav').sidenav({edge:'right'});
    });
           
}