// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 



var array =[{femaleName} , {maleName}, {instName}]



function nameClass (Objects){
	newArr=[];
	for (var key in object){
		newArr.push (object[key])

	}

return newArr;

}





// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

function middleArray(array){
	for (var i =0; i<array.length;i++){
		if (array.length / 2 === i){
			i= Math.ceil (array.length/2);
			return array[i];
		}

			
		}
	}




// 3-Change all the numbers in the array to be multiplied by two for even indexes.

function multiplyEven(arrayOfNumbers , i){
	newArr=[];
	for (var i =0; i<array.length;i++){
		if(i % 2 === 0){
			number = arrayOfNumbers[i] * 2;
			newArr.push(number);
		}

	}
	return newArr;
}
