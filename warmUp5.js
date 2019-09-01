// 1-Write a function that takes a string as an input and returns the reverse of each letter followed by a number starting from zero(solve it using while loop).
//     reverseStr('hello'); "o1l2l3e4h"
// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// eg=['hi','hello','welcome','hy'] == > ["hi","hy"]
// 3-write a function that take array if numbers and returns array of all the prime numbers in that array.
// prime([29,19,1,17,3,13,10]) ==> [29,19,17,13]

function reverseStr(string){
	var result="";
	var index=string.length - 1; 
	var number=0;
	while (index >= 0) {
		result+=string[index]+number; 
		index--;
			number++;
			}
			
			return result;
}

// this function takes a string and reverse it and puts the index of each letter beside it so the numbers go up in value
// from 0 to 4 and the index value goes down from 4 to 0 



function strings(array){
	var result = [];
	for(var i = 0 ; i < array.length ; i++){
		for(var j = i + 1; j<array.length; j++){
			if(array[i].length === array[j].length){
				result.push(array[i], array[j]);
			}		
		}
	}
	return result;
 }

// this function takes an array of strings and compares the length of each array with all of the lengths of the rest of the arrays and
// returns both arrays into a new array through two nested for loops that take the first string and compares it with the rest of the arrays
// and see which ones have the same lengths and pushes them into a new array and then takes the second array and does the same thing and so on...




	function prime(array){
		debugger;

		var result = [];
		for(var i = 0; i < array.length; i++){
			if(array[i]%2 !== 0 && array[i]%3 !== 0 && array[i]%5 !== 0 && array[i]%7 !== 0 && array[i]%11 !== 0){
				result.push(array[i]);
			}
		}
		return result;
	}

	// this function takes a string of numbers and sees which numbers are prime numbers by taking each number and checking if
	// the number is dividable by 2 and 3 and 5 and 7 and 11 and if it does return a remainder because prime numbers don't divide by 2 and 3 and 5 and 7 and 11
	// and so if there is a remainder after division then it's a prime number


