// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 
var females = ["yasmeen", "tasneem", "Basima", "Alaa"];
var males = ["Mohamad Khamaisa", "Mohamad", "Ahmed"];
var stuff = ["Sahar", "seif", "Yosief","Abed","Amar"];
// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
function getElemInMiddle(array){
	if(array.length % 2 === 1){
		return array[Math.floor(array.length / 2)];
	}
	else{
		return array[array.length /2] + " " + array[ (array.length / 2) + 1];
	}

}

// 3-Change all the numbers in the array to be multiplied by two for even indexes.
function Multiplied(array){
	for(var i = 0; i < array.length; i++){
		if(i % 2 === 0){
			array[i] = array[i] * 2;
		}
	}
	return array;
}

