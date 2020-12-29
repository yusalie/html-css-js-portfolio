var canvas = document.getElementById("line");
var canvasLine = canvas.getContext("2d");

canvasLine.beginPath();
canvasLine.moveTo(150, 0);
canvasLine.lineTo(11, 10000);
canvasLine.lineWidth = 5;
canvasLine.stroke();
