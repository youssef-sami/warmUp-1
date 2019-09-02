// 1-Write a function that takes a string as an input and returns the reverse of each letter followed by a number starting from zero(solve it using while loop).
//     reverseStr('hello'); "o1l2l3e4h"
// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// eg=['hi','hello','welcome','hy'] == > ["hi","hy"]
// 3-write a function that take array if numbers and returns array of all the prime numbers in that array.
// prime([29,19,1,17,3,13,10]) ==> [29,19,17,13]


1- 
function reversString (string){
	var i = 0;
	var str ;

	while (i < string [i]){
		return str.puch(string(i)) + i ;
		string.slice(i);

	}
	return str;
	
}


2- 

function each (array,func){
	for (var i=0; i< array.length; i++)
		func([i])
}

function sameLength(string){
	var newArray = [];
	var min = string[0].length;
	 each(string,function(value){
	 	if(value.length === min){
	 		return newArray.push(value);
	 	}
	 })
	 return newArray;
	}



3-
	function primeNumber(array){
		var newArray = [];

		each(array,function(value){
			if(value % 2 !==0  || value % 5 !== 0 || value % 7 !==0  || value % 11 !==0   || value % 2 !==13 ){

				return newArray.push(value);
			}
		})


		return newArray;

	}




