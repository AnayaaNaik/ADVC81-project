var myCanvas=document.getElementById("myCanvas")
var dimension=myCanvas.getContext("2d")
colour="blue"
dimension.beginPath();
dimension.strokeStyle=colour
dimension.lineWidth=4;
dimension.arc(400,200,60,0,2*Math.PI);
dimension.stroke();

colour="black"
dimension.beginPath();
dimension.strokeStyle=colour
dimension.lineWidth=4;
dimension.arc(500,200,60,0,2*Math.PI);
dimension.stroke();

colour="red"
dimension.beginPath();
dimension.strokeStyle=colour
dimension.lineWidth=4;
dimension.arc(600,200,60,0,2*Math.PI);
dimension.stroke();

colour="yellow"
dimension.beginPath();
dimension.strokeStyle=colour
dimension.lineWidth=4;
dimension.arc(450,280,60,0,2*Math.PI);
dimension.stroke();

colour="green"
dimension.beginPath();
dimension.strokeStyle=colour
dimension.lineWidth=4;
dimension.arc(550,280,60,0,2*Math.PI);
dimension.stroke();