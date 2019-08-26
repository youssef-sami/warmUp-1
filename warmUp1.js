// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

function fullName(firstName,lastName){
	return firstName + " " + lastName; 
}

function multiple(){
	if ((13%3)==0){
	return "13 is a multiple of 3"
}return "13 is not a multiple of 3"

function average(array){
	var total=0;
	for(var i = 0; i<array.length; i++){
		total=total+array[i];

	}
	var average = total/array.length;
	return average;
}

function age(number){
 return number * 365 * 24 * 60 * 60;
}