// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

// 3-Change all the numbers in the array to be multiplied by two for even indexes.


var strMales = ["moh", "joe"]
var strFemales = ["razan", "maha"];
var strInstructors = ["kamal", "mohannad"];



function halfArray(array){
	for(var i=0; i<(array.length/2) - 1; i++){
		return array[(array.length/2) - 1];
	}
}

function mult(array){
	for (var i = 0; i<array.length;i+=2){
			return array[i] * 2;
		
	}
	return array;
}