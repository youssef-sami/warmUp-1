var ulRight = document.getElementById('ulRight');
var ulLeft = document.getElementById('ulLeft');
var side;

function rightSide() {
    side = 'ulRight';
}

function leftSide() {
    side = 'ulLeft';
}


function addLi() {
    var li = document.createElement('li');
    var txt = document.createTextNode("Hello from the other side!")
    li.appendChild(txt);
    window[side].appendChild(li);
}