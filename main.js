var mouseEvent = "";
var last_position_of_x, last_position_of_y;
var canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 1;

canvas.addEventListener("mousedown", mousedown);

function mousedown(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;

    mouseEvent = "mousedDown";
}

canvas.addEventListener("mouseleave", mouseleave);

function mouseleave(e) {

    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", mouseup);

function mouseup(e) {

    mouseEvent = "mouseUP";
}

canvas.addEventListener("mousemove", mousemove);
function mousemove(e)
{
    current_position_of_mousex = e.clientX - canvas.offsetLeft;
    current_position_of_mousey = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown"){
        ctx.beginpath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

       ctx.moveTo(last_position_of_x,last_position_of_y);
       ctx.lineTo(current_position_of_mousex,current_position_of_mousey);
       ctx.stroke();
    }
last_position_of_x = current_position_of_mousex;
last_position_of_y = current_position_of_mousey;
}
