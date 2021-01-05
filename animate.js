h1 = document.getElementsByClassName('title_home');
h2 = document.getElementsByClassName('title_home2');
h3 = document.getElementsByClassName('title_home3');
h4 = document.getElementsByClassName('title_home4')

colors = ["white","grey", "orange", "red",
"cyan", "purple"];

rand = Math.round((Math.random()*5));

function chngeColor(){
    h1.fontcolor(colors[rand])
}