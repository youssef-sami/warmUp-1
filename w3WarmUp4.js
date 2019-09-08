// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
//     reverseStr('hello'); "o1l2l3e4h"



function reverseStr(string){
	var i=1;
	while(i< string.length){
		string.split("")
	string[0]= string[string.length];			  
		return string+i;
	 i++;
	}
}




// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// eg=['hi','hello','welcome','hy'] == > ["hi","hy"]


function sameLength(arrayOfStr){
	newArr=[];
for (var i=0; i<arrayOfStr.length ; i++){
	if (arrayOfStr[0].length===arrayOfStr[i].length){
		newArr.push (arrayOfStr[i]);
	}
}
	return newArr;

}


