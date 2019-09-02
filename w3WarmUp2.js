// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.

// Soluation: 


// -At first I need to iterate from 1 - larger number btw the two numbers
// -then in every iterate I will check if the two numbers moduls i ===0 or not
// - if yes I will change the result to i;
// - and every time I call the gcd() I will increase tje i by i ;
// - at the end ( thats mean when i === larg number) return the result

function gcd(num1, num2, result, i){
	let num = num2 ;
	result = result || 0;
	i = i || 0;

	if(i > num){
		return result;
	}
	if(num1 % i === 0 && num2 % i === 0){
			result = i;
	}
	return gcd(num1,num2,result, i + 1);
}


// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.

















