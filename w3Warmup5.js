// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates array.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.






function classmate (name, hometown, gender ){
	return {
		name:name,
		hometown:hometown,
		gender:gender
	};
}
var alaa = classmate("Alaa", "Palestine", "female"); 
var rita = classmate("Moh", "Palestine", "male"); 


var classmates = [alaa, Moh];


function displayFriend(mate){
	
	 var str = mate.name + "is from " + mate.hometown + " and gender" + mate.gender;	

return str;
}



 function addFriend(mate, classmates){
 	return classmates.push(mate);
 }


 function nbOfMale(classmates){
  for (var i = 0; i < classmates.length; i++) {
 	if (classmates.gender ==== "male"){

  }

 }
 

 function searchMates(arrayOfMates){

 }









