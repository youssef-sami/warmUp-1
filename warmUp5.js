// First I need to define an each becuase I need to iterate over array and do something
function each(array , func){
	for(var i =0; i < array.length; i++){
		func(array[i] , i);
	}
}


// 1-Write a function that takes a string as an input and returns the reverse of each letter followed by a number starting from zero(solve it using while loop).
//     reverseStr('hello'); "o1l2l3e4h"
// eg=['hi','hello','welcome','hy'] == > ["hi","hy"]

// Soluation: 

// - first I need to declarate a new string to store the new value inside it
// - iterate over array using each
// - in each element I need to conact the value + index
// - finally return the new string
function reverseStr(string){
	var newStr = '';
	each(string, function(value, index){
		newStr += value + index;
	})
	return newStr;
}


// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// Soluation: 


// - declarate a new string 
// - iterate over an old array and in every round push an empty array to the new array
// - return the new array
function returnSame(array){
	var newArray = [];
	each(array, function(){
		newArray.push([]);
	})
	return newArray;
}



// 3-write a function that take array if numbers and returns array of all the prime numbers in that array.
// prime([29,19,1,17,3,13,10]) ==> [29,19,17,13]
//Soluation: 

// - Declrate a new array & counter
// - iterate over the array
// - in each round we need to check if its prime and not 
// - if its yes add 1 to the counter;
// - and check if its the counter still = 0 added to the new array & if its not leave it
// - return the new array 
function prime(array){
	var newArray = [];
	var count =0;
	each(array, function(value, index){
		for(var j=2; j < index; j++){
			if(value % j === 0)
				count++;
		}
		if(count === 0 && value > 1)
			newArray.push(value);
		count =0;
	})
	return newArray;
}



