// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here

var fullName = "Mahmoud" + " Diab";
console.log(fullName);

----

// function isMultipleOf3(number) {
// 	if (number%3 === 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// isMultipleOf3(13); //false

13%3 === 0 ? console.log('Yes') : console.log('No');

----
function findAverage(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  var average = total/ array.length;
  return average;
};

var ages = [13,14,13,15,16,17,19,13,16,15];
findAverage(ages); //15.1

----
function calculateAgeInSeconds (age) {
  var ageInSeconds = age * 31557600;
  return ageInSeconds;
};

calculateAgeInSeconds(25); //788940000

---
