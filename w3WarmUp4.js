// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
function revers(string){

	var arr = string.split("")
	var i = arr.length - 1;
	var counter = 0;
	var outputArr = [];
	while(i >= 0){
		outputArr.push(arr[i],counter);
		i = i - 1;
		counter = counter + 1;
	}
	var str = outputArr.join("");
	return str;
}
//     reverseStr('hello'); "o1l2l3e4h"

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// eg=['hi','hello','welcome','hy'] == > ["hi","hy"]
function sameLength(arr){
	var pointer = 0;
	var outputArr = []
for (var i = arr.length - 1; i >= 0; i--) {
	if(arr[pointer].length === arr[i].length){
		outputArr.push(arr[pointer],arr[i]);
		return outputArr;

	}
	pointer = pointer + 1;
}

}