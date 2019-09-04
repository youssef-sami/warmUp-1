// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.


function gcd2(num1, num2){
	var arr = [];
	for (var i = 0; i < num1; i++) {
		return result1 = num1/i;
			for (var j=0; j < num2; j++){
				return result2 = num2/j;
		}
		if(result1 = result2){
			arr.push(result1, result2);
		}
		}
		
	}


function gcd1(num1, num2){
	return gcd2(num1, num2);
}


// this question calls another function that has two for loops one for the first number and the second is for iterating over the second number
// in order to see the dividors of each number and compare them together and see which dividors are the same and pushes them into a new empty array



function summation(num1, num2){
	var result= 0;
	for(var i = 0; i < num2; i++){
		result = num1 ++;
	}
	return result;
}


function sum(num1, num2){
	return summation(num1, num2);
}


// this function uses recursion in order to sum two numbers by iterating over anyone of them and each time adds one to the 
// second number until the for loop ands which is when i is less than the second number