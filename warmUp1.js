// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
/// 4-calculate your age in seconds.

// your code is here

function combine(firstNmae,lastName){
	return firstName + " " + lastName;
}



function isMultiply (num1, num2){
	if (num1%num2 === 0){
		return true;
	}
	return false;
}



function average (array){
	var result=0;
	for(var i =0;i<=array.length-1,i++){
		result += array[i];
	}
	return result/array.length;
}


function ageInSeconds(age){
	return age* 365*24*60*60;
}


