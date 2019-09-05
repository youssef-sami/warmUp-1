// 1-create a data model to represent your classmates

// -think of different attributes of your classmates? what do all of them have ?

//-create a factory function.
function creatMates(id, name, age){
return {
	id : id,
	name :name,
	age : age
};

}
//     -create an array to hold the classmates that you created and what you created to it .  
var classmates = [];
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
function displayFriend(mate){
	return mate.id + " " + mate.name + ", Age : " + mate.age;

}
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
function addFriend(mate){
	classmates.push(mate);
}
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
function nbOfMale(){
	return classmates.length;

}
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.
function searchMates(query, classMatesArr){
	for (var i = 0; i < classMatesArr.length; i++) {
			if(classMatesArr[i].name === query){
				return classMatesArr[i];
			}
		}
	
}