// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.
function classMates (name,age,specialization){
	retrn {
		name : name,
		age : age,
		specialization : specialization,
		gender :gender
	}
}

var classmate1 = classMates("Mays", 19, "CS", "female");
var classmate2 = classMates( "Basima", 24, "CS","female");
var classmate3 = classMates( "Alla", 30, "Industrial Engineer", "female");
var classmate4 = classMates ( "Ahmed", 24, "CS","male");
var classMatesArray = [classmate1, classmate2, classmate3];

function displayFriend (obj){
	return "My friend" + " " + obj.name + " whose now in her"+ " " + obj.age + " specilaized in" + obj.specialization;
}

function addFriend(classMatesArray,classmate){
	classMatesArray.push(classmate);
}
function nbOfMale(array){
var count = 0;
for (var i = 0; i < array.length; i++) {
	if(array[i].gender === "male"){
		count ++ ;
	}
}
return count;

}


function searchMates(classMatesArray,age){
	var result = {};
	for (var i = 0; i < classMatesArray.length; i++) {
		if(classMatesArray[i].age === age){
			result[i] = classMatesArray[i]
		}
	}
	return result;
}


