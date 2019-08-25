// 1-using + operator combine your partner first and last name .

// 2-find if the number 13 is a multiple of 3 or not.

// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]

// 4-calculate your age in seconds.

// your code is here
function display(fristName, lastName){
	var partnerName = fristName + lastName;

}

function multipleOf( num ){
	if(num%3 === 0)
		return num + " is a multiple of 3";
	else 
		return "It's not a multiple of 3"
}

function avg(arr){
	var sum=0;
	for(var i = 0; i<arr.length; i++){
		sum += arr[i];

	}
	var avg = sum/arr.length;
	return avg;
}

function ageInSec(num){
 return num * 365 * 24 * 60 * 60;
}

