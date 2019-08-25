 // 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

function fullName(){
	var string = "mohammad" + " " + "khamaiseh";
	return string;
}
 // i created a function that will take a string as an a parameter and assign to it 
 // the first name and the last name concatenated together and returns the string 




function thirteen(){
	var num = 13;
	if (num % 3 === 0){
		return true;
	} else {
		return false;
	}
}

// in order to know if thirteen is a multiple of 3 i clculated the modulus of thirtenn by 3 and if the answer is 0 then it's a multiple
// of 3 and it will return false but if the modulus is not zero then thirteen is not a multiple of 3
// and the function will return false



var array = [13,14,13,15,16,17,19,13,16,15];

function aveage(arr){
	var sum = 0;
	for (var i = 0 ; i < arr.length ; i++){
		 sum += arr[i];
	} 
		var average = sum / arr.length; 
		return average; 
	}


// i created a function that when given an array of numbers it will calculate the average 
// of the numbers in the array by calculating the sum of the numbers in the array and assigning the result to a variable called sum and then dividing it 
// by the number of elements (numbers) in the array which is the length of the array



function calculateAge(yearOfBirth , currentYear){
	var age = currentYear - yearOfBirth;
	return age;
}

// i created a function that calculates your age by calling the function with the year of birth and the current years given to the 
// function as parameters and the subtracting them from each other and returning the result which is the age in a variable called age and retuening it
