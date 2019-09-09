
var important = document.getElementByID('bi')
var normal = document.getElementByID('bn')
var rest = document.getElementByID('br')
var myDiv = document.getElementByID("div1")
var myh = document.getElementByID("head1")


important.onclick = function() {
	myDiv.style.color = "#C71585";
	myDiv.style.text = "white";
	myh.style.color = "#8B0000"


	
}

normal.onclick = function() {
	myDiv.style.color = "#00FFFF";
	myDiv.style.text = "white";
	myh.style.color = "#0000FF"


	
}

rest.onclick = function() {
	myDiv.style.color = "white";
	myDiv.style.text = "black";
	//myh.style.color = ""


	
}
