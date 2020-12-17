function openMenu() {
    document.getElementById("Menu").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeMenu() {
    document.getElementById("Menu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

// var count = 0;
// var title = "Yusuf Salie";
// var txtSpd = 70;

// function type(){
//   if(count < title.lenght){
//     document.getElementById("p").innerHTML += title.chsrAt(count);
//     count++;
//     setTimeout(type, txtSpd)
//   }
// }

//
// var canvas = document.getElementById("canvas");
// var text = canvas.getContext("2d");
// height;
// width;
//
// canvas.height = height;
// canvas.width = width;
//
// var word = [];
//
// for(var i = 0; i<20; i++){
//   word.push(new name());
// }
//
// function name(){
//   this.x = Math.random()*width;
//   this.y = Math.random()*height;
//
//   this.velx = Math.random()*10;
//   this..vely = Math.random()*10;
// }
//
// function draw_word(){
//   for(var j = 0; j < word.lenght; j++){
//     var w = word[j];
//     var text_color = ["#00FF00","#000000","#0000FF"," #283593"," #ba4a00"," #943126"];
//     var text_style = ["DIGITALSTRIP"];
//     var text_size = (Math.random()*110)+10;
//     text.font = "90px '"+text_style[j]+"'";
//     text.linewidth = 3;
//     text.strokeStyle = text_color[j];
//     text.fillStyle = text_color[j+2];
//     text.fillText("Yusuf Salie", w.x, w.y);
//     text.strokeText("Yusuf Salie", w.x, w.y);
//
//     w.x += w.x;
//     w.y += w.y;
//
//     if(w.x < -150){
//       w.x = width +150;
//     }
//     if (w.y < - 150) {
//       w.y = height + 150;
//     }
//     if (w.x > width+150) {
//       w.x = -150;
//     }
//     if (w.y > height+150) {
//       w.y = -150;
//     }
//   }
// }
//
// function clear(){
//   text.clearRect(0,0, canvas.width, canvas.height);
// }
//
// setInterval(clear(), 50);
// setInterval(draw_word, 50);