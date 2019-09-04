// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
//     reverseStr('hello'); "o1l2l3e4h"
// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// eg=['hi','hello','welcome','hy'] == > ["hi","hy"]


function reversed(string){
	var result = "";	
	var i = 0;
	while (i < string.length){
		if (i === 0)
		result +=  string[string.length - (1+i)] ;
	else{

		result += i + string[string.length - (1+i)] ;
	}

		i++;
	}
	return result;
}

function sameLength(strings){
	var newArr = [];
	var l = strings[0].length
for (var i = 0; i < strings.length; i++) {
 	if( (strings[i]).length === l){
 		newArr.push(strings[i]);
 	}
}
	return newArr;
}