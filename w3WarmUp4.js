// 1-Write a function that takes a string as an input and returns the reverse of each letter 
function reverse(str){
	var newStr=""
	for (var i = str.length-1 ; i >= 0 ; i--) {
		newStr += str[i];
	}
	return newStr;
}




//followed by a number starting from zero(solve it using while loop).



//     reverseStr('hello'); "o1l2l3e4h"
function reverse(str){
	var newStr=""
	var j = 1
	var i = str.length-1
	while ( i >= 1  ) {
		newStr += str[i]+j;
	 i--;
	 j++
	}
	return  newStr+str[0];
}

// 2-write a function that takes array of strings and returns an array of the strings that have the same length

function test(arrayOfString){
	var arr=[]

	for (var i = 0; i <arrayOfString.length; i++) {
		//console.log("its i "+ i)

	for (var j = 0; j <arrayOfString.length; j++) {
		if(arrayOfString[i].length === arrayOfString[j].lengh){
			console.log('its j '+ j)
			console.log(arrayOfString[i] + "  "+arrayOfString[j])
		arr.push(arrayOfString[i] , arrayOfString[j])
	}

	}
	}
	return arr;
}

// eg=['hi','hello','welcome','hy'] == > ["hi","hy"]
