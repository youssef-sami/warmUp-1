// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
function gcd (num1,num2,i,cd){
	var i | num1;
	 num1=Math.abs(num1)

	 num2=Math.abs(num2)
	var cd | i;
	// console.log(i +"    " + cd + "  "+ num1 + "  "+ num2)
	while(i>=1 && i >=1){
		console.log(i +"    " )
	if(num1%i===0 && num2 %i===0  )
		cd = i;
		 gcd(num1,num2,i--,cd)

	}
	 return cd;

}






// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
function sum(num1 , num2, i , j,summation){
	 i || 0;
	 j|| 0 
	 summation ||0;
	 
	 while( i <= num1 && j<= num2){
	 	summation = i+ j;
	 	 sum(num1,num2,i+1 , j+1,summation)
	 }
	 	return summation;

}

//you can only add one at each summetion, you'll need to use recursion in this.

