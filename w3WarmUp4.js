// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
//     reverseStr('hello'); "o1l2l3e4h"

// - iterate over the array from the last
// - add to the new string the element and then add the number that start from zero
// - return the new string

function reverseStr(str){
	let newStr = [];
	let i = str.length - 1;
	let count = 0;

	while(i >= 0){
		newStr += str[i];
		newStr += count;
		i--;
		count++;
	}

	return newStr;
}

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// eg=['hi','hello','welcome','hy'] == > ["hi","hy"]

// - iterate over an array
// - in the first loop to iterate over all the element
// - in seconf for to take the rest of element and comput to the elemnt in the first for
// - if the length of two elemnt equal added to the new array
// - return the new array

function sameLength(array){
	let newArray = [];

	for(let i = 0 ; i < array.length; i++){
		for(let j = i+1; j < array.length; j++){
			if(array[i].length === array[j].length){
				newArray.push(array[i], array[j]);
			}
		}
	}

	return newArray;
}