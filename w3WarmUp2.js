// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

function devision(numbers){
	var maxDev=0;
	var temp =0;
	for(var  i  =numbers/2 ; i>=2 ;i--){
console.log(i);
		if(numbers%i ==0){
			temp=numbers/i;
			if(i> temp)
				maxDev= i;
			else
				maxDev =temp;
		}
	}
	return maxDev;

}
function devisionRecursion(number ,maxDev){
	if(maxDev === undefined)
	{
		maxDev =number/2;
	}

	if( number% maxDev==0)
	{
		return maxDev;
	}

	return devisionRecursion(number, --maxDev)
}

// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
function sum(num ,num2, result)//
{
	if(result == undefined)
	{
		result =0
	}

	if(num2 ==0){
		return result;
	}
	--num2;
	result=+--num;

	return result + sum(num , num2 );
}
//you can only add one at each summetion, you'll need to use recursion in this.

