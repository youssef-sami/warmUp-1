// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.



 

// Part a

mame, age, major, gender

// all of the classmates have these properties in common



// Part b

 function classMates(name, age, major, gender){
	return  {
		name: name,
		age: age,
		major: major,
		gender: gender
	}
}


	var mate1 = classMates('ameer', 22, 'M.E', 'male');
	var mate2 = classMates('naser', 27, 'A.E', 'male');
	var mate3 = classMates('noor', 25, 'B.A', 'female');
	var mate4 = classMates('nirmeen', 30, 'N.S', 'female');

// this function is a factory function that creates objects assigned to each classmate with his/her propertirs or characteristics  
// after creating the factory function i used it to create my classmates 



// Part c

var mates = [mate1, mate2, mate3, mate4];

// this array contains all of my classmates that i created using the factory function




// part d   

function displayFriend(mate){
	return 'This my classmate and friend' + ',' + ' ' + 'his/her name is' + ' ' + classMates.name + ',' + ' ' + 'his/her age is' + ' ' + classMates.age + ',' + ' ' + 'his/her major is' + ' ' + classMates.major + ' ' + 'and his/her gender is' + ' ' + classMates.gender + '.'; 
}

// this function takes a mate which is an object that was created by the factory function and displays the important characteristics of the mateas as string 





// part e

function addFriend(mate){

	return mates.push(mate);
}

// this function takes a mate that was created using the factory function and pushes it into the array of the mates




// part f 


 function nbOfMale(array){
 	var males = 0;
 	for (var i = 0; i<array.length; i++){
 		if(array[i].gender = 'male'){
 			males ++;
 		}
 	}
 	return males;
 }

// this function takes an array of mates which are objects and iterates over the elements of the array and checks the gender in each element and if it is male it returns 
// this element into a new array which is called males

// part g

function searchMates(query, array){
	var info = [];
	for (var i = 0; i<array.length; i++){
			if(query === array[i].age){
				info.push(array[i]);
		}
	}
	return info;
}

// this function takes a query about the age and an array and then iterates over the elements of the array which are objects and sees if the
 // age in this object matches the query and if so returns the object in a new array

