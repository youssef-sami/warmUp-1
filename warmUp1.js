// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here

function combine(firstName, lastName){
	return firstName + ' ' +lastName;
}




// I need to muliply 3 and check of the result equal 13 or not
// If yes return true 
// if nor return false
function mult(13){
	let i = 0;
	while (i < 4){
		if(Math.pow(3,i) === 13)
			return true;
	}
	return false
}



// create the funvtion that iterate on all elements inside the array 
// after that we need to return the summation divided by length of element
var ages = [13,14,13,15,16,17,19,13,16,15];
function averageAges(ages){
	let sum = 0;
	for(let i =0 ; i < ages.length ; i++){
		sum += ages[i] ;
	}
	return sum / ages.length;
}



// at first I need to get the time now
// then should to calculate the diff. btw Date of birth and the time now 
// then converte the diff to seconds
function ageSecond(yearBirth, yearNow){
	var ageYear = yearNow * yearBirth ;
	return ageYear * 365 * 24 * 60 * 60; // seconds =  years * days(in one year) * hours in one day * mins * seconds 
}












