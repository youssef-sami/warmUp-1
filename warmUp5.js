// 1-Write a function that takes a string as an input and 
//returns the reverse of each letter followed by a number starting from zero(solve it using while loop).
function revers (str){
	var i = str.length-1;
	var j = 0;
	newStr = "";
	while (i >= 0){
			newStr+=(j + str[i]);
		i--;
		j++
		
	}
	return newStr;
}



//     reverseStr('hello'); "o1l2l3e4h"





// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// eg=['hi','hello','welcome','hy'] == > ["hi","hy"]

function sameLength(array){
	var newArray = [];
	for ( var i = 0 ; i < array.length ; i++){
		if(array[i].length ===array[i+1].length )
			newArray.push(array[i])
	}
	return newArray;
}

// 3-write a function that take array if numbers and returns array of all the prime numbers in that array.

function each(array, func) { 
       for (var i = 0; i < array.length; i++) { 
             func(array[i], i); 
       } 
 }

function prime(array){
	function isPrime(num){
		var count = 0 ;
		for ( var i = 2 ; i < num ; i++){
			if ( num % i === 0){
				count++ }
			}
			
			if (count === 0) 
				return true;
			else return false;
		
	}
	var newArray = [] 
	each (array , function(elem, index){
		if (isPrime(elem))
			newArray.push(elem);
			
		
	});
	return newArray;
}



// prime([29,19,1,17,3,13,10]) ==> [29,19,17,13]
