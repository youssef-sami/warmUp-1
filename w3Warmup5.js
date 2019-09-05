// 1-create a data model to represent your classmates
// -think of different attributes of your classmates? what do all of them have ?

var obj = {
	name: {
		first:'firstName',
		last:'LastName'
	},
	gender:'Male',
	yearOfBirth:1990,
	calculateAge: function(yearOfBirth){
		return (2019-yearOfBirth)
	}
}


//     -create a factory function.

function createClassMate (fName,lName, gender,yearOfBirth) {
	return {
		name: {
		firstName:fName,
		LastName: lName
	},
	gender:gender,
	yearOfBirth:yearOfBirth,
	calculateAge: function(yearOfBirth){
		//used this.yearOfBirth to accsess the value inside the passed object
		return (2019-this.yearOfBirth)
	}
	}
}
//-create an array to hold the classmates that you created and what you created to it .  
var annab= createClassMate('Mohammed','Annab','Male',1990);
var yara= createClassMate('Yara','Salhi','Female',1992);
var classmates=[annab,yara];

//-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
function displayFriend (friend) {
	return ('My '+friend.gender+ ' friend name is '+ friend.name.firstName+' '+friend.name.LastName+', Was born in  '+friend.yearOfBirth+' ('friend.calculateAge+' years old)' )
}
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
function addFriend (friend) {
	classmates.push(friend);
}

//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
function nbOfMale (arr) {
	var number=0;
	arr.forEach(function(element){
		if(element.gender ==='Male') {
			number++;
		}
	})
	return number;
}
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.

function searchMates (query,arr) {
	//here i used the displayFriend to first combine all of the passed object data
	//into single text, then used the includes function to search about the query
	return arr.filter(friend => displayFriend(friend).includes(query))
}

