// 1-Write a function that takes a string as an input and returns the reverse of each letter followed by a number starting from zero(solve it using while loop).
//     reverseStr('hello'); "o1l2l3e4h"
// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// eg=['hi','hello','welcome','hy'] == > ["hi","hy"]
// 3-write a function that take array if numbers and returns array of all the prime numbers in that array.
// prime([29,19,1,17,3,13,10]) ==> [29,19,17,13]

function reversed(string){
	var result = "";	
	var i = 0;

	while (i < string.length){

		result += i + string[string.length - (1+i)] ;
		i++;
	}
	return result;
}

function sameLength (array){
	var newArr = [];
	var itemLength = array[0].length;
	for(var i = 0; i< array.length; i++){
		if(array[0].length === array[i]){
			newArr.push(array[i]);
		}

	return newArr;
}

function primearray (array){
	var newArr = [];
	var count = 0;
	for(var i = i ; i < array.length; i++){
		if (array[i] /i === 0){
			count ++;
		}
		if (count > 2){
			newArr.push(array[i]);
		}

	}
	return newArr;
}
