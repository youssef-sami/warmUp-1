
// 1-Write a function that takes a string as an input and returns the reverse of each letter
//followed by a number starting from zero(solve it using while loop).
//     reverseStr('hello'); "o1l2l3e4h"

function reverse(str){

	var result = [];
	var temp = [];
	resultStr = "";

	for(var i = 0; i<str.length; i++){

		temp[i] = str[i];
		result [i] = temp.pop();

		result[i] += i;
		resultStr += result[i];



	}
	return resultStr;
} 

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// eg=['hi','hello','welcome','hy'] == > ["hi","hy"]

function sameLength(arr){

	var result = [];
	var temp = "";
    
    for (var i = 0; i < arr.length; i++) {

    	temp = arr.shift();

    	for(var k = 0; k<arr.length k++){

    		if (arr[k].length === temp.length) {

    			result.push(temp,arr[k]);

    		}
    	}
	}

    return result;


}
