canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_x,last_y;
color ="green";
width=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    //Addictonal Activity start 
    color = document.getElementById("color").value; 
    width= document.getElementById("width_of_line").value;
     //Addictonal Activity ends
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_x=e.clientX - canvas.offsetLeft;
    current_y=e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        console.log("last positon of X and y coordinate =");
    console.log("x ="+ last_x +"y ="+ last_y);
    ctx.moveTo(last_x,last_y);
    console.log("current positon of x and y coordinates =");
    console.log("x ="+ current_x +"y ="+ current_y);
    ctx.lineTo(current_x,current_y);
    ctx.stroke();
    }
    last_x=current_x;
    last_y=current_y;
}
//Additional Activity
 function clearArea() { ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); }