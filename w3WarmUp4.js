// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).

function reversedNumberd(string){
	var arr= string.split(""); // make an array of char from the string
	var outtString =""; // a string variable to hold the output string
	var number=0;// the ither counter to add to the char
	for(var i = arr.length-1 ; i>=0 ; i--){ // loop from the last item in the string to the first
	outtString += arr[i] + number ++; // put the corerect element in the string
	}
	return outtString;// return the wanted value 
}
//     reverseStr('hello'); "o1l2l3e4h"
// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// eg=['hi','hello','welcome','hy'] == > ["hi","hy"]
function sameLength( arrOfStrings){
	//debugger
	var outArray= []; // out array after processing
	var index=0; // a variable to get the i iteration of the first array out the scope
	var iIndex =0;// reset the i index after it is splice
	for(var i = 0 ; i <arrOfStrings.length ; i++){ // first iteration
		for(var j = i+1 ; j< arrOfStrings.length ; j++){ // secound iteration
			index =i; // assign the i counter of the first iteration to the index variable
			if(arrOfStrings[i].length == arrOfStrings[j].length){ // checks if the length equal
				outArray.push(arrOfStrings[j]);
				arrOfStrings.splice(j,1);
				j--; // after splice the array we have need to decrease the value if j by one
			}
	}
	if(outArray[outArray.length-1].length == arrOfStrings[index].length){ // checks if last element in the output array is the same with the input array and splice it
	outArray.push(arrOfStrings[i]);
	arrOfStrings.splice(i,1);
	i=iIndex // reset the i counter after splice to recheck other elemnts
	}
}
return outArray;// return array
}
