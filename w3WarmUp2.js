// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.

function greatestCommonDivisor(num1,num2){
	if(num1 === num2){
		return num1;	
}
var arr = [];
var maxDiv = arr[0];
function inner(max,num1,num2){
	if(num1> num2){
		max = num1;
	}else{
		max = num2;
	}
	for (var i = 1; i < max ; i++) {
		if(num1 % i === 0 && num2 % i === 0)
			arr.push(num1,num2);
		if(arr [i] > maxDiv){
			maxDiv = arr[i];
		}
	}
	return maxDiv;

}
return inner(num1,num2);		
}




function sum(num1,num2){

}