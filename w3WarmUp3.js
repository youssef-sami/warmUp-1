// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 

let names = ['Mohammad', 'Ahmed', 'Mays','Yasmeen','Fida','Yara','Basima','Tasneem','Doaa','Alaa'];


// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

function middle(array){
	return array[array.length / 2];
}

// 3-Change all the numbers in the array to be multiplied by two for even indexes.
//Soluation :


// - declarate each to iterate over an array

function each(coll, fun) {
	if (Array.isArray(coll)) {
		for (var i = 0; i < coll.length; i++) {
			fun(coll[i], i);
		}
	} else {
		for (var key in coll) {
			fun(coll[key], key);
		}
	}
}

// multEven([1,2,3,4,5,6,7])  -----> [1, 4, 3, 8, 5, 12, 7]

// - create new array
// - iterate over the array using each
// - check if the index is even ---> multiplay the elemnt by 2
// - push the element in the new array
// - return the new array 

function multEven(numbers){
	let newArray = [];
	
	each(numbers, function(element, index){
		if(index % 2 !== 0){
			newArray.push(element * 2);
		} else {
			newArray.push(element);
		}
	});

	return newArray;
}

