// 1-Create arrays in the global scope consisting of 
//strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 
var females = ["Yara","Tasneem","Basima","Yasmeen","Mays","Nahle","Fidaa","Doaa","Alaa"]
var males = ["Khamaiseh","Ajour","Ennab"];
var instructors = ["Hanan","Abdulrahman","Saif","Adel","Sahar","Ammar"]
// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
function middle(array){
	if(array.length%2!==0)
	return array[Math.floor(array.length/2)]
else return array[Math.floor(array.length/2)]+"  "+array[Math.floor((array.length-1)/2)]
}
// 3-Change all the numbers in the array to be multiplied by two for even indexes.

function EvenIndexMultipliedByTwo(array){
	var newArray=[]
	for(var i = 0 ; i < array.length; i++){
		if(typeof(array[i])==="number"&& i%2===0)
			newArray.push(array[i]*2)
		else
			newArray.push(array[i])

	}
	return newArray;
}
