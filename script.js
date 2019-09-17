//Write a javascript function that takes the input from the text field, 
//if the input is a number smaller than 100,add an item with the number to the list with blue color,  
//if the number is greater than 100 add an item with the number to the list with red color
var btn = document.getElementByID('btn1');
var text = document.getElementByID('inpt1');
var list = document.getElementByID('list');
btn.onclick = function(){	
	if(text.text <= 100){
		list.append('<li id='last' style = 'color = blue'>text.text');
	}else{
		list.append('<li style = 'color = red'>text.text');
	}
}

var deleteBtn = document.getElementByID('delete');
deleteBtn.onclick = function(){
	var lastItem = document.getElementByID('last')
	list.remove(lastItem)
	
}