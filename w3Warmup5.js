// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.




function createPerson(name, age, gender){
	return {
		name: name,
		age: age,
		gender: gender
	}
}


let person1 = createPerson('yara', 27, 'female');
let person2 = createPerson('mays', 19, 'female');
let person3 = createPerson('Ajor', 24, 'male');

let persons = [person1, person2, person3];


function displayFriend(person){
	return 'name: ' + person.name + 'age:  ' + person.age + 'gender:  ' + person.gender;
}


function addFirend(person, persons){
		persons.push(person);
}


function nbOfMale(persons){
	let count = 0;

	for(let i = 0; oi< persons.length; i++) {
		if(persons[i].gender === 'male') {
			count++;
		}
	}

	return count;
}


function searchMates(que, persons) {
	let newPersons = [];

	for(let i = 0; oi< persons.length; i++) {
			for(let key in persons[i]){
				if(persons[i].key === 'que'){
						newPersons.push(persons[i]);
				}
			}
		}

	return newPersons;
}






















