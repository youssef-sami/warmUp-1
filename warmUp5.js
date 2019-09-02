// 1-Write a function that takes a string as an input and returns the reverse of each letter followed by a number starting from zero(solve it using while loop).
//     reverseStr('hello'); "o1l2l3e4h"
function reverseWithNumber(str) {
	//Declaring an index to iterate reversely over the string
	var index= str.length-1;
	//Declare a result varible, a number to print
	var result="";
	var number=0;
	//While the text still have chars
	while (index >= 0) {
		//add the number+the char
		result+=number+str[index]
		index--;
		number++;
	}
	return result
}

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// eg=['hi','hello','welcome','hy'] == > ["hi","hy"]


function sameLength (arr){
	//Define the result array
	var result=[];
	//this loop will take every string
    for (var i = 0; i < arr.length; i++) {
    	//and this one will compare it with the rest texts
		  for (var j = i+1; j < arr.length ; j++) {
			  if(arr[i].length === arr[j].length){
				  result.push(arr[i],arr[j]);
			}
		}
	}
			return result;
}


// 3-write a function that take array if numbers and returns array of all the prime numbers in that array.
// prime([29,19,1,17,3,13,10]) ==> [29,19,17,13]

//First i'll use a function that checks if a number is prime or not
function isPrime(number) {
    //if the number % all of the numbers befor it with reminder then it's a prime 
    for (var i = 2; i < number; i++)
        if (number % i === 0) {
            return false
        }
    // return the number if it's not 1
    return number > 1;
}

//then i'll use the above function on our passed array
function getAllPrrimes(arr) {
    var primes = [];
    for (var i = 0; i <= arr.length; i++) {
        // push to the result (primes) array
        if (isPrime(arr[i])) {
            primes.push(arr[i])
        }
    }
    return primes;
}