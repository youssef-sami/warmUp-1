// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
function gcd(num1, num2){
	
	if(num1 < num2 ){
		var temp = num2;
        num2 = num1 
        num1 = temp;
	}

return num1 % num2;
}

// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly

//you can only add one at each summetion, you'll need to use recursion in this.

function addOne(num){
	return num + 1;

}
function sum(num1, num2){
	if(num2 < 1){
		return num1;
	}
	num1 = addOne(num1);
	return sum(num1,num2 - 1);
};