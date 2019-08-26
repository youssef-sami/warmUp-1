// 1-using + operator combine your partner first and last name .
partnerName = "Tasneem " + "GH" ; 







// 2-find if the number 13 is a multiple of 3 or not.
function multipleThree(num){
	if(num%3 === 0){
		console.log(num +" is a multiple of 3")
	}
	else{
		console.log(num +" is not a multiple of 3")
	}
}

// call the function 
multipleThree(13); //// the output is "13 is not a multiple of 3"









// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
ages =[13,14,13,15,16,17,19,13,16,15]; // define the array of ages 
function ave(arr){
	var sum= 0; 
	//First we need to loop to all values in the 
	for (var i= 0 ; i< ages.length){
		sum+= ages[i]; 

	}
	averageAge= sum/ages.length; 
	return averageAge; 
}

// call the function 
ave(ages); // the output is the ave ages 








// 4-calculate your age in seconds.
myAge = 24* 365 * 24*60*60; 

// your code is here