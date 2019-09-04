// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
//     reverseStr('hello'); "o1l2l3e4h"

function reverseWithNumber (str) {
	//this varible will reverse the string
	var index=str.length-1;
	//this verible will print the number
	var number=1;
	//this verible to push the result on it
	var result='';
	//while the string still have letters
	while (index >= 0) {
		//do
		result+=str[index]+number;
		index--;
		number++;
	}
	return result;
}

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// eg=['hi','hello','welcome','hy'] == > ["hi","hy"]
function sameLength (arr) {
	//define an array to push the results
	var result=[];
	//first loop to catch every element and pass it to the 
	for (var i = 0; i < arr.length; i++) {
		//second loop, which compares it's length with the rest
		for (var j = i+1; j < arr.length; j++) {
			if(arr[i].length===arr[j].length){
				result.push(arr[i],arr[j])
			}
		}
	}
	return result;
}

// this is the same solution but with using filter method
function sameLengthWithFilter (arr) {
  var result=[]
	for (var i = 0; i < arr.length; i++) {
	  result = arr.filter(element => element.length === arr[i].length)
	}
	return result;
}
