// 1. Create a HTML file, add 3 text fields to it next to each other, 1 button below them, 1 headline below the button
// 2. Create a JS file and connect it to the HTML
// 3. Create a CSS file and link it to the HTML
// 4. Create a function in the JS file that takes a number from the first
// and the third text fields and takes (+, -, *, /) from the second text field, 
//then it calculates the operation and changes the headline to the result.
// 5. The function should change the color of the headline to green if
// the result is smaller than 100, to blue if it’s equal 
//to or larger than 100 and to red if the input in the first or the third text fields 
//is not a number and if the second text field is not one of the 4 operations (wrong inputs)
// 6. Style the HTML elements in the CSS file as you see fit and center them in the webpage

var firstiput =$("#inp1");
var secoundinput =$("#inp2");
var third =$("#inp3");
function caluclate(){
debugger
	if(secoundinput.val() === "+"  && typeof(parseInt(firstiput.val()))=="number" && typeof(parseInt(third.val()))=="number"){
		return  parseInt(firstiput.val()) + parseInt(third.val() );
	}

	else if(secoundinput.val() === "-" && typeof(parseInt(firstiput.val()))=="number" && typeof(parseInt(third.val()))=="number"){
		return parseInt(firstiput.val()) - parseInt(third.val());
	}

	else if(secoundinput.val() === "*" && typeof(parseInt(firstiput.val()))=="number" && typeof(parseInt(third.val()))=="number"){
		return parseInt(firstiput.val()) * parseInt(third.val());
	}

	else if(secoundinput.val() === "/" && typeof(parseInt(firstiput.val()))=="number" && typeof(parseInt(third.val()))=="number"){
		return parseInt(firstiput.val()) / parseInt(third.val());
	}
	else 
	{
		$("#calc").text("invaled calculation operand");
	}
console.log(parseInt(third.val()))
}

$("#btn1").click(function(){
	console.log(caluclate())
	if(caluclate()<100){
		$("#calc").css({"color":"green"})
	}

	if(caluclate()===100){
		$("#calc").css({"color":"blue"});
	}

	if(caluclate()>100){
		$("#calc").css({"color":"red"});
	
	}
	

})


