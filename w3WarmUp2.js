// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.



function commonDivisor(num1,num2){
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);
  while(num2) {
    var gcd = num2;
    num2 = num1 % num2;
    num1 = gcd;
  }
  return num1;
}



function sum(num1,num2){
		if(sum=num1+num2){
			return 
		}
		else
			
		return +sum(num1,num2)

	}
