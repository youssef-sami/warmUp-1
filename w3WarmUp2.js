// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
function gcd(num1,num2,div){
	div =1 || div= div 
	if(num1 % div !== 0 && num2 % div !== 0)
		return gcd(num1,num2,(div+1));
}


// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.

function summation (number1,number2,sum){
	sum =sum;

	if((number2 -1) !== 0);

	return summation(number1+sum,number2,sum+1);
}




