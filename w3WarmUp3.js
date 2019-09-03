// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 
var globalArray=["duaa","fedaa","alaa","mohammad","ahammad","sief","yousef","sahar","adel"]

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
function middleOfTheArray(array){
	if(array.length %2 ==0){// check if the length is an even number and return both element in the middle
		return array[Math.floor(array.length /2)] +" "+ array[Math.floor(array.length /2) -1] ; // return statment
	}
	else{// if its odd then retun the element in the middle
		return array[Math.floor(array.length /2)]// return statment
	}
}

// 3-Change all the numbers in the array to be multiplied by two for even indexes.
function multiplayByTow(array){
	for(var i = 0 ; i < array.length ; i++){// iterate between the arry
		if(i%2 ===0 && typeof(array[i])==="number") // cheks if the index is even and if the value is a number
			array[i]=array[i]*2;// multyplay value by tow
	}
	return array;// return the modified value
}


