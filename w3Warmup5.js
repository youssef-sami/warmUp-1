// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.


function each(arr,func){
	for(var i in arr){
		func(arr[i] , i)
	}
}
//this

function classMate(name, age, city, study,gender){
	return{
		name:name,
		birthday:birthday,
		city:city,
		study:study,
		gender:gender
	};
}
var classMate1=("Yara",27,"Nablus","chimestry","female")

var classMate2=("Tasneem",24,"Ramallah","cumputer Eng","female")

var arrayOfClassMate=[classMate1,classMate2];

function displayFriend(nate){
	return name+" "+ age + " " + city + " " +study
}
function addFriend(arrayOfClassMate,mate){
	arrayOfClassMate.push(mate);
}
function nbOfMale(arrayOfClassMate){
	var count = 0;
	each(arrayOfClassMate, function(mate){
		if(mate.gender ==="male")
			count++;
	})
	return count;
}
function searchMates(arrayOfClassMate){


}

