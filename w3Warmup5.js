// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.


function Classmate(name, gender, age, hobby) {
  return {
  	name: name,
  	gender: gender,
  	age: age,
  	hobby: hobby
  };
}

var classmateA = Classmate('Maha', 'Female', 27, 'dancing');
var classmateB = Classmate('Zinah', 'Female', 32, 'coding');
var classmateC = Classmate('kareem', 'Male', 25, 'coding');
var classmateD = Classmate('Ali', 'Male', 22, 'writing'); 
var calassmates =[classmateA, classmateB, classmateC, classmateD];

function displayFriend(mate) {
  return 'My mate name is ' + mate.name + '\n My mate gender is ' + mate.gender + '\n My mate age is ' + mate.age + '\n My mate hobby is ' + mate.hobby;
}

console.log(classmateA);

function addFriend(mate) {
  classmates.push(mate);
}

var classmateE = Classmate('ola', 'Female', 25, 'dancing'); 
conosle.log(addFriend(classmateE));

function nbOfMale(arr) {
  var maleArray = arr.filter(function(mate){
    return mate.gender === 'Male';
  });
  return maleArray.length;
}

console.log(nbOfMale(calassmates));

function searchMates(query,arr) {
  return arr.filter(function(mate)){
    return query;
  }
}
console.log('hjell');


