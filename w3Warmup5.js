// 1-create a data model to represent your classmates
// -think of different attributes of your classmates? what do all of them have ?

/*

 THE MATE OBJECT STRUCTURE

mate1 = {
	name: name,
	age: age,
	gender: gender,
	major: major
};

*/

var yasmeen = {
	name: "Yasmeen",
	age: 26,
	gender: "female",
	major: "IT"
};


// -create a factory function.

function makeMate(name, age, gender, major) {
	return {
		name: name,
		age: age,
		gender: gender,
		major: major
	}
}

//-create an array to hold the classmates that you created and what you created to it .


var yara = makeMate("yara", 26, "famale", "eng");
var beso = makeMate("basema", 24, "female", "CS");

var classMates = [ yasmeen, yara, beso ];

//-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.

function displayFriend(mateName, arr) {

    each(arr, function(element, i){

    	if ( element["name"] ===  mateName){

    		console.log("Name: " + element["name"] + "\n" + "Age: " + element["age"] + "\n"  + "Gender: " + element["gender"] + "\n" + "Major: " + element["major"] + ".");
    	}
    });
	
}


//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.

function addFriend(mate, arr) {

	 arr.push(mate);

	 return "You mate has been added successfully!"

}

//     -calculate the number of male friends that your class have by writing a function called nbOfMale.

//Declare each function
function each(arr, func){
	for(var i in arr){
		func(arr[i], i);
	}

}


function nbOfMale(arr) {

	var counter = 0;

	each(arr, function(element, i){

		if(element["gender"] === "male"){
			counter ++; 
		}
	});

	return "Number of male mates is: " + counter;
}



//-Write a function searchMates that, given a query and an array of Mates,
//searches the array of mates for "matching" mate. You will decide what way 
//you want to write your search algorithm.

function searchMates(query, arrMates) {

	var result = {};

	each( arrMates, function(element, i){

		if ( element["name"].toLowerCase() === query.toLowerCase() ){

			result = element;

		} else {

			result = "No such mate in the class";
		}


	});

	return result;


}


