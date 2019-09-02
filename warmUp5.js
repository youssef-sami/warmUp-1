// 1-Write a function that takes a string as an input and returns the reverse of each letter followed by a number starting from zero(solve it using while loop).
//     reverseStr('hello'); "o1l2l3e4h"
// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// eg=['hi','hello','welcome','hy'] == > ["hi","hy"]
function length(arr){
	var lengths= [] ; 
	for ( var i =0; i< arr.length-1 ; i++){
		lengths.push(arr[i].length)
	}
	return lengths; 
}

function similarLeng(arr1, arr2){
	var same=[]; 
	for (var i = 0 ; i < arr.length-1 ; i++){
		
	}
}
// 3-write a function that take array if numbers and returns array of all the prime numbers in that array.
// prime([29,19,1,17,3,13,10]) ==> [29,19,17,13]
function isPrime(val){
	for (var i = 2 ; i< val ; i++){
		if (val % i ===0){
			return false; 
		}

	}
	return true ; 
}
function prime(arr){
	var result=[] ;
	for ( var i = 0 ; i< arr.length-1 ; i++){
		if (isPrime(arr[i])){
			result.push(arr[i]); 
		}
	} 
	return result ; 
	
}
