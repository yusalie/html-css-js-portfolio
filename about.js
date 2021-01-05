var canvas = document.getElementById("line");
var line = canvas.getContext("2d");

line.beginPath();
line.moveTo(300, 0);
line.lineTo(11, 150);
line.lineWidth = 5;
line.stroke();

var canvas2 = document.getElementById("line2");
var line2 = canvas2.getContext("2d");

line2.beginPath();
line2.moveTo(150, 0);
line2.lineTo(11,10000)
line2.lineWidth = 5;
line2.stroke();

var canvas3 = document.getElementById("line3");
var line3 = canvas3.getContext("2d");

line3.beginPath();
line3.moveTo(220, 0);
line3.lineTo(11,12000)
line3.lineWidth = 5;
line3.stroke();

var canvas4 = document.getElementById("line4");
var line4 = canvas4.getContext("2d");

line4.beginPath();
line4.moveTo(1, 1);
line4.lineTo(22000, 11000);
line4.lineWidth = 5;
line4.stroke();

var machine = document.getElementById("canvas2");
var line5 = machine.getContext("2d");

line5.beginPath();
line5.moveTo(155, 0);
line5.lineTo(1200, 1110000);
line5.lineWidth = 5;
line5.stroke()
