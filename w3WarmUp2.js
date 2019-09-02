// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
function gcdFinder(num1, num2, gcd) {
    //on the deafult case, number 1 is the gcd between all numbers
    var gcd = 1;

    var minValue = Math.min(num1, num2);
    // here I belive that the gcd must be less or equal than the smaller number

    if (gcd <= minValue) {
        return gcd
    } else {
        // and here we apply the gcd algoritihm (But it's not working :D)
        if (num1 % gcd !== 0 && num2 % gcd !== 0) {
            gcd++;
            gcdFinder(num1, num2, gcd)

        }

        return gcd;

    }
}
// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.

function indirectSum(num1,num2) {
	var result=num2;
	//for this question i'm thinking about giving the var result the value of any number passed (let's say num2)
	//and then start adding 1 from num1 to the result and decriment it at the same time till it reaches zero
	if (num1>0) {
		num1
	}

	return result;
}