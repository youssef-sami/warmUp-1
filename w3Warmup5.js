// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.



function classMates(name,age,education,city,gender) {
	return {
		name: name,
		age: age,
		education: education,
		city: city,
		gender: gender
	}
}
var classMate1=classmates("tasneem",24,"computerEngineering","ramallah","female");
var classMate2=classmates("basima",24,"computersceince","tulkarem","female");
var classMate3=classmates("yara",27,"chemicalEngineering","nablus","female"); 

var newArray=[classMate1,classMate2,classMate3];

function displayFriend(mate){
	return "name is " +  mate.name+ " and age is "+ mate.age + " and has a university degree in " + mate.education + "  and lives in " + mate.city + "  and  the gender is a " + mate.gender;
}

function addFriend(newArray,mate){
	newArray.push(mate);
}


function numOfMales(newArray){
	var counter = 0;
	for (var i = 0 ; i<newArray.length; i++) {
		if(array[i].gender === "male"){
			counter++;
		}
	}
	return counter;
}

function searchMates(query, newArray){
	var arrayOfResult = [];

	for (var i = 0; i < newArray.length; i++) {
		if(query === newArray[i].city){
			arrayOfResult.push(newArray[i]);
		}
	}
	
	return arrayOfResult;
}