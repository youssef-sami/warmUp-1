// 1-Write a function that takes a string as an input and returns the reverse of each letter followed by a number starting from zero(solve it using while loop).
//     reverseStr('hello'); "o1l2l3e4h"
function reverseWithNumber(str) {
	//Declaring an index to iterate reversely over the string
	var index= str.length-1;
	//Declare a result varible, a number to print
	var result="";
	var number=0;
	//While the text still have chars
	while (index >= 0) {
		//add the number+the char
		result+=number+str[index]
		index--;
		number++;
	}
	return result
}

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// eg=['hi','hello','welcome','hy'] == > ["hi","hy"]


function sameLength (arr) {
	var lengths = arr.map(x => x.length)
	var index=0;
	var same=[];
	for (var i = 0; i < lengths.length; i++) {

			}

}


// 3-write a function that take array if numbers and returns array of all the prime numbers in that array.
// prime([29,19,1,17,3,13,10]) ==> [29,19,17,13]


