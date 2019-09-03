// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 

var rbk7Females=['Alaa','Basima','Fidaa','Mays','Nahla','Tasneem','Yara','Yasmeen'];
var rbk7males=['Khamiseh','Annab','Ajour'];
var rbk7Hirs=['Abed','Adel','Ammar','Sahar','Seif','Yousef'];

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
function midOfArray(arr){
	//For this function i'll divide the length of the array by 2
	//and using math.floor (in case of odd values of length)
	return arr[Math.floor(arr.length/2)]
}

// 3-Change all the numbers in the array to be multiplied by two for even indexes.
function doubleEvenIndexes(arr) {
	//iterate over the passed array
	for (var i = 0; i <= arr.length; i++) {
		//then first check the type of the element and if number then 
		//check the index if even ==> double it
		if(typeof arr[i] === 'number' && i%2 ===0) {
			arr[i] = arr[i]*2
		}
	}
	return arr;
}

