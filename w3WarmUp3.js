// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

// 3-Change all the numbers in the array to be multiplied by two for even indexes.


function global(){
	var array = ["Yasmeen","Alla","Tasneem","Mays","sahar","Hanan"];
	// if we have another function here the array can be used in it.

}

function middleElement(array){
	var result = 0;
	var result2 = [];
	for (var i = 0; i < array.length; i++ ){
		if (array.length % 2 !== 0){
			result = array[(array.length - 1)/2]
		}else {
			result = array[(array.length +1 )/2]
		}
	}
	return result;
	
}

function multiply(numbers){
	for( var i = 0; i< numbers.length; i++ ){
		if(i % 2 === 0){
			numbers[i] = numbers[i] * 2;
		}
	}
	return numbers;
}