// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
//     reverseStr('hello'); "o1l2l3e4h"
// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// eg=['hi','hello','welcome','hy'] == > ["hi","hy"]


function reverse(string){
	var newString=" ";
    for (var i = string.length - 1; i >= 0; i--) {
    newString=newString+string[i];
		return newString + i;
	}
}

function each(coll, f) {
	if (Array.isArray(coll)) {
		for (var i = 0; i < coll.length; i++) {
			f(coll[i], i);
		}
	} else {
		for (var key in coll) {
			f(coll[key], key);
		}
	}
}

function sameLength(array){
	var newArray=[];
	each(array,function(element,i){
		newArray.push(array[i].length===array[i].length)
		return newArray;
	})
}