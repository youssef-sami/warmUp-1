// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
//     reverseStr('hello'); "o1l2l3e4h"


function reverse (str){
	var str2 = "";
	var i = 0
	while(i <str.length){
		str2 = 
		i++;}
	return str2.push(str.slice(1))+ i ;	

}
//ghjkf

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// eg=['hi','hello','welcome','hy'] == > ["hi","hy"]


function sameLength (array){
	var newArray = [];
	var first = array[0].length;
	for(var j = 0 ; j< array.length; j++){
		first = array[j].length;
	for ( var i = 0; i < array.length; i++){
		if(array[i].length === first){
			newArray.push(array[i])
		}


		}
	}
	return newArray;
}




