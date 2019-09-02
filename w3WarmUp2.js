// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

function GCD (num1, num2){
	var gcd= num2; 
	if (num1%num2 ===0 && num2 %gcd ===0){
		return gcd; 
	}
	return GCD(num1, gcd-1); 
	
}


// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.

function sum(arr){
	debugger; 
	if (arr.length === 1){
		return sum + arr[0];
	}
	var sum = arr[0]; 
	arr=arr.splice(1)
	sum(arr); 
}

