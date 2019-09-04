// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
//     reverseStr('hello'); "o1l2l3e4h"
// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// eg=['hi','hello','welcome','hy'] == > ["hi","hy"]


function reverse(string){
	var result= "";
	for (var i = 0; i<string.length; i++) {
		for(var j=string.length - 1; j >=0 ; j--){         
			 result += string[j]+i;                                         

		}
	}






function sameLength(array){
	var same= [];
	var startComparing;
	for(var i=1; i < array.length; i++){
		startComparing = array[i - 1];
		if(startComparing === array[i]){
			same.push(startComparing && array[i]);
		}
		i++;
	}
	return same;
}