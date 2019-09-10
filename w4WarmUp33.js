var input = document.getElementById('input');
var btn = document.getElementById('btn');
var ul = document.getElementById('ul');
var arr= document.getElementsByTagName('li')

function addLi() {
	var color='red';
	if(arr[arr.length-1].className === 'red') {
			color='yellow';
	}
	var li = document.createElement('li');
	li.className=color;
	var txt= document.createTextNode(input.value)
	li.appendChild(txt);
	ul.appendChild(li);
	color='yellow'
}