// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here

// Q : 1
var firstName  = " Mohamed ";
var lastName = " Anab " ;
var fullName = firstName + lastName;

// Q : 2
function isMultipleBy3(num){
	if(num % 3 === 0){
		return true ;
	}
	return false ;
}
isMultipleBy3(13);

//Q : 3
function average(arr){
	var sum = 0;
for (var i = 0; i < arr.length; i++) {
	sum += arr[i];
}
return sum / arr.length;
} 

//Q : 4 
function getAgeInSecond(age){
	return age * 360 * 24 * 60 * 60 ;
}
getAgeInSecond(19);