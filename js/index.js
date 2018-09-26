// Global Variables
var app;
var canvas;
// Functions
$( document ).ready(function() {
    // TODO: When the document is loaded and ready for manipulation.
    vue();
    swarmParticles();
    //typed();
});

function vue(){
    // This function runs all of the Vue code.
    Vue.component("todo-item", {
        props : ["title"],
        template : '\
        <li>\
            {{title}}\
            <button v-on:click = "$emit(\'remove\')">Remove</button>\
        </li>\
        ',
    });

    app = new Vue({
        el : "#todo-list",
        data : {
            todos : [
                {
                    title : "Some text",
                    id : 1
                }
            ],
            nextTodoIndex : 2,
            newTodoText : "",
        },
        methods : {
            addTodoItem : function(){
                this.todos.push({id : this.nextTodoIndex, title: this. newTodoText});
                this.nextTodoIndex ++;
                this.newTodoText = "";
            }
        },
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

// CANVAS CODE
function deg2rad(deg){
    return (deg * Math.PI / 180.0);
}

mousePos = {
    x : undefined,
    y : undefined
}
window.addEventListener("mousemove", function(event){
    mousePos.x = event.x;
    mousePos.y = event.y;
});


dist = 50;

function swarmParticles(){
    canvas = document.querySelector("canvas");
    canvasContainer = $(".canvas-container");
    canvas.height = canvasContainer.height();
    canvas.width = canvasContainer.width();
    ctx = canvas.getContext("2d");
    /*ctx.fillStyle = "blue"
    ctx.fillRect(100, 100, 100, 100);
    ctx.fillStyle = "green"
    ctx.fillRect(400,100,30,30);
    ctx.fillRect(644, 300,10,10);

    // line
    ctx.beginPath();
    ctx.moveTo(50, 300);
    ctx.lineTo(300, 100);
    ctx.lineTo(400,500);
    ctx.strokeStyle = "red";
    ctx.stroke();

    // Arc / Circle
    ctx.beginPath();
    ctx.arc(600,600, 30, 0, deg2rad(360), false);
    ctx.fillStyle = "brown";
    ctx.fill();
    ctx.lineWidth = "40px";
    ctx.strokeStyle = "yellow";
    ctx.stroke();
    */
    /*circles = getRandomCircles(10, ctx, canvas.height, canvas.width, 10, 3,3, null, true);
    circles.forEach(element => {
        element.draw();
    });*/
    /*rects = drawRandomRects(20, ctx, canvas.height, canvas.width, 10, 20,null, true);
    console.log(rects);
    rects = drawRandomRects(20, ctx, canvas.height, canvas.width, 20, 10,null, true);
    console.log(rects);*/

    numberOfCircles = 1000;
    var circles = getRandomCircles(numberOfCircles, ctx, canvas.height, canvas.width, 10, 5,5, null, true);;
    
    window.addEventListener("resize", function(){
        canvas.height = canvasContainer.height();
        canvas.width = canvasContainer.width();
        circles = getRandomCircles(numberOfCircles, ctx, canvas.height, canvas.width, 10, 5,5, null, true);;
    });
    
    function get_rendezvous_dx_dy(circle, neighbours, stepSize){
        // Using concept of https://magnus.ece.gatech.edu/Papers/SnapshotSWARM16.pdf
        var x0 = circle.x;
        var y0 = circle.y;
        var xf = 0;
        var yf = 0;
        neighbours.forEach(n =>{
            xf += stepSize * (n.x - x0) * weight(distance(x0,y0, n.x, n.y));
            yf += stepSize * (n.y - y0) * weight(distance(x0,y0, n.x, n.y));
        });
        return {dx : xf, dy : yf};
    }

    function weight(distance){
        return (distance - dist) / distance;
    }

    function distance(X0, Y0, X1, Y1){
        var X = X0 - X1;
        var Y = Y0 - Y1;
        return Math.sqrt(X * X + Y * Y);
    }

    function animate(){
        requestAnimationFrame(animate);
        ctx.clearRect(0,0, canvas.width, canvas.height)
        circles.forEach(element => {
            element.setMousePosition(mousePos);
            neighbours = element.getNeighbours(circles, 200);
            d = get_rendezvous_dx_dy(element, neighbours, 0.005);
            element.dx = d.dx;
            element.dy = d.dy;
            element.update();
        });
    }

    animate();

}

// This circle object
function Circle(
    context,
    canvasHeight, 
    canvasWidth,
    x,
    y,
    radius,
    dx,
    dy,
    color,
    fill,
    maxRadius = null,
    mouseSensitiveRadius = null,
    dr = 0
){
    this.context = context;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.orignalRadius = this.radius;
    this.maxRadius = maxRadius
    this.dx = dx;
    this.dy = dy;
    this.dr = dr;
    this.color = color;
    this.fill = fill;
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
    this.mouseSensitiveRadius = mouseSensitiveRadius;
    this.mousePos = undefined;

    this.draw = function(){
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        if(fill){
            this.context.fillStyle = this.color;
            this.context.fill();
        }else{
            this.context.strokeStyle = this.color;
            this.context.stroke();
        }
    }

    this.update = function(){
        if (this.x + this.radius > this.canvasWidth ||
            this.x - this.radius < 0){
                this.dx = - this.dx;
        }
        if (this.y + this.radius > this.canvasHeight ||
            this.y - this.radius < 0){
                this.dy = - this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        if(this.mouseSensitiveRadius != null){
           this.mouseInteractivity(); 
        }
        this.draw();
    }

    this.setMousePosition = function(mousePos){
        this.mousePos = mousePos;
    }

    this.mouseInteractivity = function(){
        X = this.x - mousePos.x;
        Y = this.y - mousePos.y;
        DIST = Math.sqrt(X * X + Y * Y);
        if (DIST < this.mouseSensitiveRadius){
            if(this.radius < this.maxRadius){
                this.radius += this.dr;
                this.x += (Math.random() - 0.5) * 5
                this.y += (Math.random() - 0.5) * 5;
            }
        }else{
            if(this.radius > this.orignalRadius){
                this.radius -= this.dr;
            }
        }
    }

    this.getNeighbours = function(circlesList, gazeRange){
        var neighbours = [];
        circlesList.forEach(circle => {
            X = this.x - circle.x;
            Y = this.y - circle.y;
            DIST = Math.sqrt(X * X + Y * Y);
            if(DIST < gazeRange && this != circle){
                neighbours.push(circle);
            }
        });
        return neighbours;
    }
}


function getRandomCircles(amount, context, canvasHeight, canvasWidth,  radius, maxDx, maxDy, color = null, fill = false){
    ctx = context;
    circles = [];
    for(i = 0; i < amount; i++){
        x = Math.round(Math.random() * (canvasWidth - 2 * radius)) + radius;
        y = Math.round(Math.random() * (canvasHeight - 2 * radius) + radius);
        dx = (Math.random() - 0.5) * maxDx;
        dy = (Math.random() - 0.5) * maxDy;
        _color = "";
        if (color == null){
            _color = getRandomColor();
        }else{
            _color = color;
        }
        circle = new Circle(ctx, canvasHeight, canvasWidth, x, y, radius, dx,dy, _color, fill, radius * 3, 100, 2.5)
        circles.push(circle)
    }
    return circles;
}

function drawRandomRects(amount,
                        context,
                        canvasHeight,
                        canvasWidth,
                        rectHeigth,
                        rectWidth,
                        color = null,
                        fill = false){
    ctx = context;
    rects = [];
    for(i = 0; i < amount; i++){
        x = Math.round(Math.random() * canvasWidth);
        y = Math.round(Math.random() * canvasHeight);
        _color = "";
        if(fill){
            if(color == null){
                _color = getRandomColor();
            }else{
                _color = color;
            }
            ctx.fillStyle = _color;
            ctx.fillRect(x,y,rectWidth, rectHeigth);
        }else{
            if(color == null){
                _color = getRandomColor();
            }else{
                _color = color;
            }
            ctx.strokeStyle = _color;
            ctx.strokeRect(x, y, rectWidth, rectHeigth);
        }
        rects.push({
            x : x,
            y : y,
            heigth : rectHeigth,
            width : rectWidth,
            color : _color,
            fill : fill
        });
    }
    return rects;
}

function getRandomColor(){
    r = Math.round(Math.random() * 255).toString();
    g = Math.round(Math.random() * 255).toString();
    b = Math.round(Math.random() * 255).toString();
    return "rgb(" + r + ", " + g + "," + b + ")";
}

    