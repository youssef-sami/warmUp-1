4. C//reate a function in the JS file that takes a number from the first and the third text fields and takes (+, -, *, /) from the second text field, 
	//then it calculates the operation and changes the headline to the result.

	
var te1= document.getElementsByName('op1');
var te3 = document.getElementsByName("op3");
var op1 = document.getElementsByName("op2");


	function operation(){
		var result =0;
		return result=te1 + op1 + te3;

document.getElementsByName('h1')=result;
}